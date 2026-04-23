//textarea[name='q']
describe("Test login saucedemo.com", () => {
  beforeEach(() => {
    cy.log("Before log");
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("contain", "/inventory.html");
  });

  afterEach(() => {
    cy.log("AfterEach log");
  });

  it("should redirect to /inventory.html", () => {
    cy.url().should("contain", "/inventory.html");
  });

  it("should display inventory list", () => {
    cy.get(".inventory_list").should("be.visible");
  });

  it("should display inventory items", () => {

    cy.get(".inventory_item").should("be.visible");
    cy.get (".inventory_item").first().find ("button");
    cy.contains ("products");
    cy.contains (".inventory_item_name", 'Sauce Labs Backpack');

    cy.get (".inventory_list").children().as ("newButton");
    cy.get (".inventory_list").children().should ('have.length', 6);
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });




});