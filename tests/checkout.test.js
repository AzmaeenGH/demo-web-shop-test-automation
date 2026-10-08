import { test, expect } from '@playwright/test';
import { SearchProduct } from "../pages/SearchProductPage.js";
import { Checkout } from "../pages/CheckoutPage.js";

test('user can complete checkout and see order confirmation', async ({ page }) => {
    const search = new SearchProduct(page);
    const checkout = new Checkout(page);

    await search.page_Open();

    const email = await search.register_NewAccount("carol", "hamington", "password01");
    await search.logout_ofAccount();
    await search.login_ToAccount(email, "password01");




    // Search and add to cart (standalone, no cross-file state)
    await search.search_ProductBox("computer");
    await search.search_Button();
    await search.result_Visible("Build your own cheap computer");
    await search.open_Product("Build your own cheap computer");
    await search.set_Quantity("1");
    await search.add_ToCartButton();
    await search.wait_AddToCartSuccess();

    // Checkout
    await checkout.click_CartLink();
    await checkout.agree_TermsOfService();
    await checkout.click_CheckoutButton();

    await checkout.fill_BillingAddress({
        firstName: "carol",
        lastName: "hamington",
        email: "sqa19testing_004@gmail.com",
        country: "United States",
        city: "New York",
        address1: "123 Main St",
        zip: "10001",
        phone: "1234567890"
    });
    await checkout.click_BillingContinue();

    await checkout.click_ShippingContinue();
    await checkout.click_ShippingMethodContinue();
    await checkout.click_PaymentMethodContinue();
    await checkout.click_PaymentInfoContinue();
    await checkout.click_ConfirmOrder();

    // Verify order confirmation
    const confirmationText = await checkout.get_OrderCompletedText();
    expect(confirmationText?.trim()).toContain("Your order has been successfully processed!");

    await page.pause();
});
