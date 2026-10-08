import { test, expect } from '@playwright/test';
import { SearchProduct } from "../pages/SearchProductPage.js";

test('[Search Product > Add to Cart] SUCCESSFUL', async ({ page }) => {
    const pages = new SearchProduct(page);

    await pages.page_Open();


    // Register
    const email = await pages.register_NewAccount("carol", "hamington", "password01");

    // Logout
    await pages.logout_ofAccount();

    // Login with same account
    await pages.login_ToAccount(email, "password01");


    // Search
    await pages.search_ProductBox("computer");
    await pages.search_Button();
    await pages.result_Visible("Build your own cheap computer");
    
    // Open product
    await pages.open_Product("Build your own cheap computer");

    // Increase quantity
    await pages.set_Quantity("2");

    // Add to cart
    await pages.add_ToCartButton();
    await pages.wait_AddToCartSuccess();

    // Verify cart
    await pages.click_CartLink();
    const productQty = await pages.get_CartProductQuantity();
    expect(productQty).toBe("2");
    await page.pause();
});