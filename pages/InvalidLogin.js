import { BasePage } from "./BasePage.js";

class InvalidLoginPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;

        // for LOGIN
        this.loginLink = page.locator('a[href="/login"]');
        this.loginEmailAddress = page.locator("#Email");
        this.loginPassword = page.locator("#Password");
        this.loginButton = page.locator(".login-button");

        // Invalid text for invalid email and/or password
        this.invalidEmailPassword = page.getByText("Login was unsuccessful. Please correct the errors and try again.")
    }

    async click_LoginLink(){
        await this.loginLink.click();
    }

    async login_EmailAddress(name){
        await this.loginEmailAddress.fill(name);
    }
    
    async login_Password(name){
        await this.loginPassword.fill(name);
    }

    async login_Button(){
        await this.loginButton.click();
    }

    async invalid_EmailPasswordCheck(){
        await this.invalidEmailPassword.textContent();
    }
}

export {InvalidLoginPage};
