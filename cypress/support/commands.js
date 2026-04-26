// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (username, password) => { 
//     cy.get('#user-name').should('be.visible').type(username);
//     cy.get('#password').should('be.visible').type(password);
//     cy.get('#login-button').should('be.visible').click();
// })


Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");

  cy.contains("button", "Sign In").click();

  cy.get("#signinEmail").clear().type(email);
  cy.get("#signinPassword").clear().type(password);

  cy.get(".modal-footer .btn-primary").click();
});