import loginPage from "../../pages/loginPage";
import {users} from "../../fixtures/users.json";

describe('Login to SauceDemo', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.verifiOpenLoginPage();

    });

    it('valid login', () => {

        loginPage.login(
            user.standartUser.username,
            user.standartUser.password
        )


        loginPage.login(
            user.invalidUser.username,
            user.invalidUser.password
        )
        
        loginPage.getErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
    })
    
