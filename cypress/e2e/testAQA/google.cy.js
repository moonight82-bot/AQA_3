//textarea[name='q']").type('Cypress Testing{enter}')
describe('Test Google', () => {
  
    beforeEach(() => {
    cy.visit('/')
  })

it("open Google", () => {
    
    cy.get('textarea[name="q"]').should("be.visible");
    cy.get('textarea[name="q"]').type("Hello cypress!");
  });


it ('open Google', () => {

    cy.get('textarea[name="q"]').should('be.visible');
  
})
})