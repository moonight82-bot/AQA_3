import SignInForm from "../../pages/signinForm";
import GaragePage from "../../pages/GaragePage";
import ExpensesPage from "../../pages/ExpensesPage";

describe("Adding car to Garage", () => {
  const signInForm = new SignInForm();
  const garagePage = new GaragePage();
  const expensesPage = new ExpensesPage();

  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    signInForm.login(Cypress.env("email"), Cypress.env("password"));

    garagePage.verifyGaragePageOpened();
  });

  it("Should add car, add fuel expense and remove car", () => {
  garagePage.addCar("Porsche", "Panamera", "7");

  garagePage.verifyAddCarModalClosed();
  cy.contains("Porsche Panamera").should("be.visible");

  expensesPage.addExpense("Porsche Panamera", "12", "5", "4");

  expensesPage.verifyModalClosed();

  cy.contains("Fuel expenses").should("be.visible");
  cy.contains("12").should("be.visible");
  cy.contains("5L").should("be.visible");
  cy.contains("td", /4(\.\d+)? USD/).should("be.visible");

  // garagePage.openGaragePage();

  // garagePage.verifyGaragePageOpened();
  // cy.contains("Porsche Panamera").should("be.visible");

  // garagePage.clickEditCar();

  // cy.contains("Edit a car").should("be.visible");

  // garagePage.removeCar();

  // cy.contains("Edit a car").should("not.exist");
  // cy.contains("Porsche Panamera").should("not.exist");
});
});
