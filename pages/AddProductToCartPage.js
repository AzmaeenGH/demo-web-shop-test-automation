import { BasePage } from "./BasePage.js";
import { LoginPage } from "./LoginPage.js";
import { RegisterPage } from "./RegisterPage.js";
import {expect} from "@playwright/test";

class AddProductToCart extends BasePage{
    constructor(page){
        super(page);
        this.page = page;

        this.register = new RegisterPage(page);
        this.login = new LoginPage(page);
        

        this.logoutOfAccount = page.locator('a[href="/logout"]');

        // CATEGORY
        this.categoryComputer = page.locator('a[href="/computers"]').first();

        // // Type
        this.desktopComputer = page.locator('img[alt="Picture for category Desktops"]').first();

        // Select a product
        this.computerSelect = page.getByRole('img', { name: 'Picture of Build your own cheap computer' });

        // Add to Cart
        this.addToCartButton = page.locator("#add-to-cart-button-72").first();

        // Cart contents check
        this.cartContents = page.locator('a[href="/cart"]').first();
        // this.cartContents = page.locator('a[href="/cart"]');

        // Cart product name and quantity
        // this.cartProductName = page.getByText('a.class="product-name"');
        this.cartProductQuantity = page.locator('input.qty-input').first();

    }

    // Register a new account
    async register_NewAccount(firstName, lastName, password){
        // const uniqueEmail = `testing_${Date.now()}@gmail.com`;
        const uniqueEmail = `qa.user.${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;
        await this.register.click_RegisterLink();
        await this.register.gender_Selection();
        await this.register.first_Name(firstName);
        await this.register.last_Name(lastName);
        await this.register.email_Address(uniqueEmail);
        await this.register.password_Input(password);
        await this.register.confirm_Password(password);
        await this.register.register_button();
        await this.register.registration_completeContinue();
        return uniqueEmail; // return so test can reuse for login
    }

    // LOGOUT
    async logout_ofAccount(){
        await this.logoutOfAccount.click();
    }

    // LOGIN to Account   
    async login_ToAccount(email, password){
        await this.login.click_LoginLink();
        await this.login.login_EmailAddress(email);
        await this.login.login_Password(password);
        await this.login.login_Button();
    }


    // Category
    async category_Computer(){
        await this.categoryComputer.click();
    }

    // Type
    async desktop_Computer(){
        await this.desktopComputer.click();
    }

    // Select a product
    async computer_Select(){
        await this.computerSelect.click();
    }

    // Add to Cart
    async add_toCart(){
        await this.addToCartButton.click();
    }

    // Cart contents check
    async cart_Contents(){
        await this.cartContents.click();
    }

    // Cart product name and quantity
    async cart_ProductName(productName){
        // await expect(this.cartProductName).toHaveText(productName);
        const productLocator = this.page.locator('a.product-name', { hasText: productName });
        await expect(productLocator).toBeVisible();
    }
    async cart_ProductQuantity(productQuantity){
        await expect(this.cartProductQuantity).toHaveValue(productQuantity);
    }

}

export {AddProductToCart};
