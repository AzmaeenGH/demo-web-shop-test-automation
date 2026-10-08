// import test from "node:test";
import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage.js";
    
test('Login Successful', async ({ page }) => {
    const pages = new LoginPage(page);

    // LOGIN
    await pages.page_Open();
    await pages.click_LoginLink();
    await pages.login_EmailAddress("sqa19testing_003@gmail.com");
    await pages.login_Password("password01");
    await pages.login_Button();

    // await page.waitForTimeout(50000);
    await page.pause();
});
