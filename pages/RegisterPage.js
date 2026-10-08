import { BasePage } from './BasePage.js';   
// import { expect } from "@playwright/test";

class RegisterPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;

        // locators for REGISTER ACCOUNT
        this.registerLink = page.locator('a[href="/register"]');
        this.genderSelectionFemale = page.locator("#gender-female");
        this.firstName = page.locator("#FirstName");
        this.lastName = page.locator("#LastName");
        this.emailAddress = page.locator("#Email");
        this.password = page.locator("#Password");
        this.confirmPassword = page.locator("#ConfirmPassword");
        this.register = page.locator("#register-button");


        // locators for Registration confirmation page
        this.registrationCompleteText = page.getByText("Your registration completed")
        this.registrationCompleteContinue = page.locator(".register-continue-button")
    }
 
    // Registration
    async click_RegisterLink(){
        await this.registerLink.click();
    }

    async gender_Selection(){
        await this.genderSelectionFemale.click();
    }

    async first_Name(name){
        await this.firstName.fill(name);
    }

    async last_Name(name){
        await this.lastName.fill(name);
    }

    async email_Address(email){
        await this.emailAddress.fill(email);
    }
    
    async password_Input(passwordF){
        await this.password.fill(passwordF);
    }

    async confirm_Password(confirmPass){
        await this.confirmPassword.fill(confirmPass);
    }

    async register_button(){
        await this.register.click();
    }

    // Registration Confirmation
    async registration_completeText(){
        await this.registrationCompleteText.textContent();
        // await expect(this.registrationCompleteText).toBeVisible();
    }

    async registration_completeContinue(){
        await this.registrationCompleteContinue.click();
    }
}

export {RegisterPage};
