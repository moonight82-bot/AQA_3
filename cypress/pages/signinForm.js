import BasePage from "./BasePage";

class SignInForm extends BasePage {
  selectors = {
    signInButton: ".header_signin",
    emailInput: "#signinEmail",
    passwordInput: "#signinPassword",
    logInButton: ".modal-footer .btn-primary",
  };

  open() {
    this.click(this.selectors.signInButton);
  }

  fillEmail(email) {
    this.type(this.selectors.emailInput, email);
  }

  fillPassword(password) {
    this.type(this.selectors.passwordInput, password);
  }

  submit() {
    this.click(this.selectors.logInButton);
  }

  login(email, password) {
    this.open();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default SignInForm;
