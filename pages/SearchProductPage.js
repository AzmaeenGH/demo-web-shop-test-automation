import { BasePage } from "./BasePage.js";
import { LoginPage } from "./LoginPage.js";
import { RegisterPage } from "./RegisterPage.js";

class SearchProduct extends BasePage{
    constructor(page){
        super(page);
        this.page = page;

        
        this.register = new RegisterPage(page);
        this.login = new LoginPage(page);
        this.logoutOfAccount = page.locator('a[href="/logout"]');


        // SEARCH
        this.searchBox = page.locator("#small-searchterms");
        this.searchButton = page.locator(".search-box-button");

        // SEARCH RESULTS
        this.searchResultTitle = (name) => page.locator(".product-item .product-title a", { hasText: name });

        // PRODUCT DETAILS PAGE
        this.quantityInput = page.locator(".qty-input").first();
        this.addToCartButton = page.locator(".add-to-cart-button").first();
        this.addToCartSuccessMessage = page.locator(".bar-notification.success");

        // CART
        this.cartLink = page.locator('a[href="/cart"]').first();
        this.cartProductName = (name) => page.locator('a.product-name', { hasText: name });
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
        return uniqueEmail;
    }

    // Logout
    async logout_ofAccount(){
        await this.logoutOfAccount.click();
    }

    // Login
    async login_ToAccount(email, password){
        await this.login.click_LoginLink();
        await this.login.login_EmailAddress(email);
        await this.login.login_Password(password);
        await this.login.login_Button();
    }


    // Search
    async search_ProductBox(text){
        await this.searchBox.fill(text);
    }
    async search_Button(){
        await this.searchButton.click();
    }

    // Results
    async result_Visible(name){
        await this.searchResultTitle(name).waitFor({ state: "visible" });
    }
    async open_Product(name){
        await this.searchResultTitle(name).click();
    }

    // Product Details
    async set_Quantity(qty){
        await this.quantityInput.fill(qty);
    }
    async add_ToCartButton(){
        await this.addToCartButton.click();
    }
    async wait_AddToCartSuccess(){
        await this.addToCartSuccessMessage.waitFor({ state: "visible" });
    }

    // Cart
    async click_CartLink(){
        await this.cartLink.click();
    }
    // async get_CartProductName(){
    //     return await this.cartProductName("").textContent();
    // }
    async get_CartProductQuantity(){
        return await this.cartProductQuantity.inputValue();
    }
}

export {SearchProduct};
