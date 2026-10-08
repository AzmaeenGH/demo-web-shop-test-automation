// import test from "node:test";
import { test, expect } from '@playwright/test';
import { AddProductToCart } from "../pages/AddProductToCartPage.js";
    
test('user can add a desktop computer to the cart', async ({ page }) => {
    const pages = new AddProductToCart(page);

    await pages.page_Open();

    // Register
    const email = await pages.register_NewAccount("carol", "hamington", "password01");

    // Logout
    await pages.logout_ofAccount();

    // Login with same account just created
    await pages.login_ToAccount(email, "password01");

    // Navigate to category
    await pages.category_Computer();
    await pages.desktop_Computer();
    await pages.computer_Select();

    // Add to cart
    await pages.add_toCart();
    await page.waitForTimeout(2000);

    // Verify cart
    await pages.cart_Contents();

    // Checking if cart contents match our expectation
    await pages.cart_ProductName("Build your own cheap computer");
    await pages.cart_ProductQuantity("1");

    await page.pause();
});
