import signUpPage from "../../pages/signupForm.js";

describe("Registration form validation", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    signUpPage.openRegistrationForm();
    signUpPage.checkRegistrationTitle();
  });

  it("Should show required error for Name field", () => {
    signUpPage.blurField(signUpPage.selectors.nameInput);

    signUpPage.checkError(signUpPage.selectors.nameInput, "Name required");
    signUpPage.checkRedBorder(signUpPage.selectors.nameInput);
  });

  it("Should show invalid and length errors for Name field", () => {
    signUpPage.typeName("4");

    signUpPage.checkError(signUpPage.selectors.nameInput, "Name is invalid");
    signUpPage.checkError(
      signUpPage.selectors.nameInput,
      "Name has to be from 2 to 20 characters long",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.nameInput);
  });

  it("Should show required error for Last name field", () => {
    signUpPage.blurField(signUpPage.selectors.lastNameInput);

    signUpPage.checkError(
      signUpPage.selectors.lastNameInput,
      "Last name required",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.lastNameInput);
  });

  it("Should show invalid and length errors for Last name field", () => {
    signUpPage.typeLastName("4");

    signUpPage.checkError(
      signUpPage.selectors.lastNameInput,
      "Last name is invalid",
    );
    signUpPage.checkError(
      signUpPage.selectors.lastNameInput,
      "Last name has to be from 2 to 20 characters long",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.lastNameInput);
  });

  it("Should show required error for Email field", () => {
    signUpPage.blurField(signUpPage.selectors.emailInput);

    signUpPage.checkError(signUpPage.selectors.emailInput, "Email required");
    signUpPage.checkRedBorder(signUpPage.selectors.emailInput);
  });

  it("Should show incorrect error for Email field", () => {
    signUpPage.typeEmail("wrong-email");

    signUpPage.checkError(
      signUpPage.selectors.emailInput,
      "Email is incorrect",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.emailInput);
  });

  it("Should show required error for Password field", () => {
    signUpPage.blurField(signUpPage.selectors.passwordInput);

    signUpPage.checkError(
      signUpPage.selectors.passwordInput,
      "Password required",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.passwordInput);
  });

  it("Should show validation error for Password field", () => {
    signUpPage.typePassword("test");

    signUpPage.checkError(
      signUpPage.selectors.passwordInput,
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.passwordInput);
  });

  it("Should show required error for Re-enter password field", () => {
    signUpPage.blurField(signUpPage.selectors.repeatPasswordInput);

    signUpPage.checkError(
      signUpPage.selectors.repeatPasswordInput,
      "Re-enter password required",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.repeatPasswordInput);
  });

  it("Should show error when passwords do not match", () => {
    signUpPage.typePassword("Password1");
    signUpPage.typeRepeatPassword("Password2");

    signUpPage.checkError(
      signUpPage.selectors.repeatPasswordInput,
      "Passwords do not match",
    );
    signUpPage.checkRedBorder(signUpPage.selectors.repeatPasswordInput);
  });

  it("Register button should be disabled when form is invalid", () => {
    signUpPage.typeName("4");
    signUpPage.typeLastName("4");
    signUpPage.typeEmail("wrong-email");
    signUpPage.typePassword("test");
    signUpPage.typeRepeatPassword("test");

    signUpPage.checkRegisterButtonDisabled();
  });

  it("Should register user with valid data", () => {
    const uniqueEmail = `test_${Date.now()}@testinator.com`;

  //   signUpPage.typeName("John");
  //   signUpPage.typeLastName("Smith");
  //   signUpPage.typeEmail(uniqueEmail);
  //   signUpPage.typePassword("Password1");
  //   signUpPage.typeRepeatPassword("Password1");

  //   signUpPage.checkRegisterButtonEnabled();
  //   signUpPage.clickRegisterButton();

  //   cy.contains("Garage").should("be.visible");
  });
});
