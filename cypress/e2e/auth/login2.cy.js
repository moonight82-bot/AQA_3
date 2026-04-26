import loginPage from "../../pages/LoginPage";

let userData

describe('Login to SauceDemo', () => {
    beforeEach(() => {
        loginPage.visit();
        cypress.fixtures('user').then((data) => {
            userData = data;
        });
    })
    
    it('valid login', () => {

       cypress.login(
            userData.validUser.username,
            userData.validUser.password
        )

    })
})