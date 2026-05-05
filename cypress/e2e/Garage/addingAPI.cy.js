import GaragePage from "../../pages/GaragePage";

describe("Car creation with intercept and expense creation via API", () => {
  const garagePage = new GaragePage();

  const carData = {
    brand: "Porsche",
    model: "Panamera",
    mileage: "7",
  };

const today = new Date().toISOString().split("T")[0];

const expenseData = {
  reportedAt: today,
  mileage: 12,
  liters: 5,
  totalCost: 4,
};

  before(() => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
  });

  beforeEach(() => {
    cy.visit("/panel/garage", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    garagePage.verifyGaragePageOpened();
  });

  it("Should create car via UI, validate it via API, create expense via API and validate expense in UI", () => {
    cy.intercept("POST", "/api/cars").as("createCar");

    garagePage.addCar(carData.brand, carData.model, carData.mileage);

    cy.wait("@createCar").then(({ response }) => {
      expect(response.statusCode).to.eq(201);
      expect(response.body.status).to.eq("ok");

      const carId = response.body.data.id;

      cy.wrap(carId).as("carId");

      cy.request("GET", "/api/cars").then((getCarsResponse) => {
        expect(getCarsResponse.status).to.eq(200);
        expect(getCarsResponse.body.status).to.eq("ok");

        const createdCar = getCarsResponse.body.data.find(
          (car) => car.id === carId,
        );

        expect(createdCar).to.exist;
        expect(createdCar.brand).to.eq(carData.brand);
        expect(createdCar.model).to.eq(carData.model);
        expect(String(createdCar.mileage)).to.eq(carData.mileage);
      });
    });

    cy.get("@carId").then((carId) => {
      cy.createExpense(carId, expenseData).then((expenseResponse) => {
        expect(expenseResponse.status).to.eq(200);
        expect(expenseResponse.body.status).to.eq("ok");

        expect(expenseResponse.body.data.carId).to.eq(carId);
        expect(expenseResponse.body.data.reportedAt).to.eq(
          expenseData.reportedAt,
        );
        expect(expenseResponse.body.data.mileage).to.eq(expenseData.mileage);
        expect(expenseResponse.body.data.liters).to.eq(expenseData.liters);
        expect(expenseResponse.body.data.totalCost).to.eq(
          expenseData.totalCost,
        );
      });

      cy.visit(`/panel/expenses?carId=${carId}`, {
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
      });

      cy.contains("Fuel expenses").should("be.visible");
      cy.contains(carData.model).should("be.visible");

      cy.contains("td", String(expenseData.mileage)).should("be.visible");
      cy.contains("td", `${expenseData.liters}L`).should("be.visible");
      cy.contains(
        "td",
        new RegExp(`${expenseData.totalCost}(\\.\\d+)? USD`),
      ).should("be.visible");
    });
  });
});
