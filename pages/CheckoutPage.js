import { BasePage } from "./BasePage.js";

class Checkout extends BasePage{
    constructor(page){
        super(page);
        this.page = page;

        // CART
        this.cartLink = page.locator('a[href="/cart"]').first();
        this.termsOfServiceCheckbox = page.locator("#termsofservice");
        this.checkoutButton = page.locator("#checkout");

        // BILLING ADDRESS
        this.billingNewAddressFirstName = page.locator("#BillingNewAddress_FirstName");
        this.billingNewAddressLastName = page.locator("#BillingNewAddress_LastName");
        this.billingNewAddressEmail = page.locator("#BillingNewAddress_Email");
        this.billingNewAddressCountry = page.locator("#BillingNewAddress_CountryId");
        this.billingNewAddressCity = page.locator("#BillingNewAddress_City");
        this.billingNewAddressAddress1 = page.locator("#BillingNewAddress_Address1");
        this.billingNewAddressZip = page.locator("#BillingNewAddress_ZipPostalCode");
        this.billingNewAddressPhone = page.locator("#BillingNewAddress_PhoneNumber");
        this.billingContinueButton = page.locator("#billing-buttons-container .new-address-next-step-button");

        // SHIPPING ADDRESS
        this.shippingContinueButton = page.locator("#shipping-buttons-container .new-address-next-step-button");

        // SHIPPING METHOD
        this.shippingMethodContinueButton = page.locator(".shipping-method-next-step-button");

        // PAYMENT METHOD
        this.paymentMethodContinueButton = page.locator(".payment-method-next-step-button");

        // PAYMENT INFO
        this.paymentInfoContinueButton = page.locator(".payment-info-next-step-button");

        // CONFIRM ORDER
        this.confirmOrderButton = page.locator(".confirm-order-next-step-button");

        // ORDER CONFIRMATION
        this.orderCompletedTitle = page.locator(".order-completed .title");
    }

    // Cart
    async click_CartLink(){
        await this.cartLink.click();
    }
    async agree_TermsOfService(){
        await this.termsOfServiceCheckbox.check();
    }
    async click_CheckoutButton(){
        await this.checkoutButton.click();
    }

    // Billing
    async fill_BillingAddress(details){
        await this.billingNewAddressFirstName.fill(details.firstName);
        await this.billingNewAddressLastName.fill(details.lastName);
        await this.billingNewAddressEmail.fill(details.email);
        await this.billingNewAddressCountry.selectOption({ label: details.country });
        await this.billingNewAddressCity.fill(details.city);
        await this.billingNewAddressAddress1.fill(details.address1);
        await this.billingNewAddressZip.fill(details.zip);
        await this.billingNewAddressPhone.fill(details.phone);
    }
    async click_BillingContinue(){
        await this.billingContinueButton.click();
    }

    // Shipping
    async click_ShippingContinue(){
        await this.shippingContinueButton.click();
    }

    // Shipping Method
    async click_ShippingMethodContinue(){
        await this.shippingMethodContinueButton.click();
    }

    // Payment Method
    async click_PaymentMethodContinue(){
        await this.paymentMethodContinueButton.click();
    }

    // Payment Info
    async click_PaymentInfoContinue(){
        await this.paymentInfoContinueButton.click();
    }

    // Confirm Order
    async click_ConfirmOrder(){
        await this.confirmOrderButton.click();
    }

    // Order Confirmation
    async get_OrderCompletedText(){
        return await this.orderCompletedTitle.textContent();
    }
}

export {Checkout};
