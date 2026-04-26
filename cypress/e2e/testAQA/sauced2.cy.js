describe("Команди", () => {
  it("Clear", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get('[name="user-name"]').type("text").clear();
    cy.get('[name="user-name"]').should("have.value", "");
  });
});
