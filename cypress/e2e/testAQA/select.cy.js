describe("Test login saucedemo.com", () => {
  beforeEach(() => {
    cy.log("Before log");
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("contain", "/inventory.html");
  });

  it("Обираємо сортування Z-A", () => {
    cy.get('[data-test="product-sort-container"]').select("za");
    cy.get('[data-test="product-sort-container"]').should("have.value", "za");
  });

  it("Перевіряємо список", () => {
    cy.get(".inventory_item").then(($items) => {
      expect($items.length).to.equal(6);
    });
  });
});