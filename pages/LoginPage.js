exports.LoginPage =

    class LoginPage {

        constructor(page) {
            this.page = page;
            this.loginLink = "#login2";
            this.usernameField = "#loginusername";
            this.passwordField = "#loginpassword";
            this.loginButton = '//button[text()="Log in"]';
        }

        async gotoURL() {
            await this.page.goto('https://www.demoblaze.com/');
        }

        async login(userName, passWord) {
            await this.page.locator(this.loginLink).click();
            await this.page.locator(this.usernameField).fill(userName);
            await this.page.locator(this.passwordField).fill(passWord);
            await this.page.locator(this.loginButton).click();
        }
    };