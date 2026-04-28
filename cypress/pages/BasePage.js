class BasePage {
    visit(patch = '/') {
        cy.visit(patch);
    }

getElement(selector) {
    return cy.get(selector);        
}

click(selector) {
    cy.get(selector)
    .should('be.visible')
    .click();
}

type(selector, text) {
    cy.get(selector)
    .should('be.visible')
    .type(text);    
}

shouldBeVisible(selector) {
    cy.get(selector)
    .should('be.visible');
}

shouldContainText(selector, text) {
    cy.get(selector)
    .should('be.visible')
    .and('have.text', text);

}
}
export default BasePage;