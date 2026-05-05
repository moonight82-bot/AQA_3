Cypress.Commands.add("login", (email, password) => {
  cy.session([Cypress.config("baseUrl"), email, password], () => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.contains("button", "Sign In").click();

    cy.get("#signinEmail").clear().type(email);
    cy.get("#signinPassword").clear().type(password);

    cy.get(".modal-footer .btn-primary").click();

    cy.contains("Garage").should("be.visible");
  });
});

Cypress.Commands.add("createExpense", (carId, expenseData) => {
  return cy.request({
    method: "POST",
    url: "/api/expenses",
    body: {
      carId,
      reportedAt: expenseData.reportedAt,
      mileage: expenseData.mileage,
      liters: expenseData.liters,
      totalCost: expenseData.totalCost,
    },
  });
});
