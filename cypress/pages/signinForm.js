class SignInForm {
  selectors = {
    emailInput: "#signinEmail",
    passwordInput: "#signinPassword",
    logInButton: ".modal-footer .btn-primary",
  };

  openLogInForm() {
    cy.contains("button", "Sign In").click();
  }

  checkLogInTitle() {
    cy.contains("Log in").should("be.visible");
  }

  typeEmail(value) {
    cy.get(this.selectors.emailInput).clear().type(value);
  }

  typePassword(value) {
    cy.get(this.selectors.passwordInput).clear().type(value);
  }

  clickLogInButton() {
    cy.get(this.selectors.logInButton).click();
  }

  checkLogInButtonEnabled() {
    cy.get(this.selectors.logInButton).should("be.enabled");
  }

  checkLogInButtonDisabled() {
    cy.get(this.selectors.logInButton).should("be.disabled");
  }

  login(email, password) {
    this.typeEmail(email);
    this.typePassword(password);
    this.checkLogInButtonEnabled();
    this.clickLogInButton();
  }
}

export default new SignInForm();
