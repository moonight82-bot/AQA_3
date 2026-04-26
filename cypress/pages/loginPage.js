class SignUpPage {
  selectors = {
    signUpButton: ".hero-descriptor_btn",

    modalTitle: ".modal-title",

    nameInput: "#signupName",
    lastNameInput: "#signupLastName",
    emailInput: "#signupEmail",
    passwordInput: "#signupPassword",
    repeatPasswordInput: "#signupRepeatPassword",

    registerButton: ".modal-footer .btn-primary",
  };

  openRegistrationForm() {
    cy.get(this.selectors.signUpButton).click();
  }

  checkRegistrationTitle() {
    cy.get(this.selectors.modalTitle)
      .should("be.visible")
      .and("contain", "Registration");
  }

  typeName(value) {
    cy.get(this.selectors.nameInput).clear().type(value).blur();
  }

  typeLastName(value) {
    cy.get(this.selectors.lastNameInput).clear().type(value).blur();
  }

  typeEmail(value) {
    cy.get(this.selectors.emailInput).clear().type(value).blur();
  }

  typePassword(value) {
    cy.get(this.selectors.passwordInput).clear().type(value).blur();
  }

  typeRepeatPassword(value) {
    cy.get(this.selectors.repeatPasswordInput).clear().type(value).blur();
  }

  blurField(selector) {
    cy.get(selector).focus().blur();
  }

  checkError(inputSelector, errorText) {
    cy.get(inputSelector)
      .parents(".form-group")
      .find(".invalid-feedback")
      .should("be.visible")
      .and("contain", errorText);
  }

  checkRedBorder(inputSelector) {
    cy.get(inputSelector).should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  }

  checkRegisterButtonDisabled() {
    cy.get(this.selectors.registerButton).should("be.disabled");
  }

  checkRegisterButtonEnabled() {
    cy.get(this.selectors.registerButton).should("be.enabled");
  }

  clickRegisterButton() {
    cy.get(this.selectors.registerButton).click();
  }
}

export default new SignUpPage();
