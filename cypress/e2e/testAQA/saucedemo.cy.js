//textarea[name='q']
describe('Test login to saucedemo.com', () => {

it("should login with valid credentials", () => {

    cy.visit('/')

    cy.get('#user-name').type('standard_user');
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should('contain', '/inventory.html');

  });


});
