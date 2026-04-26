import signInForm from "../../pages/signInForm.js";

describe("Login via UI", () => {
  it("Should login with existing user", () => {
    cy.login("test_1777229911164@testinator.com", "Password1");

    cy.contains("Garage").should("be.visible");
  });
});
