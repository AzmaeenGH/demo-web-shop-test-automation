// import test from "node:test";
import { test, expect } from '@playwright/test';
import { InvalidLoginPage } from "../pages/InvalidLogin.js";

test('Invalid login check Successful', async ({ page }) => {
    const pages = new InvalidLoginPage(page);

    await pages.page_Open();
    await pages.click_LoginLink();

    // LOGIN - with wrong email
    await pages.login_EmailAddress("sqa149testing_003@gmail.com");
    await pages.login_Password("password01");
    await pages.login_Button();
    await pages.invalid_EmailPasswordCheck();
    await page.waitForTimeout(5000); // wait 5 sec

    // LOGIN - with wrong password
    await pages.login_EmailAddress("sqa19testing_003@gmail.com");
    await pages.login_Password("passwordjj01");
    await pages.login_Button();
    await pages.invalid_EmailPasswordCheck();
    await page.waitForTimeout(5000); // wait 5 sec

    // LOGIN - with wrong email and password
    await pages.login_EmailAddress("sqa149testing_003@gmail.com");
    await pages.login_Password("passwordjj01");
    await pages.login_Button();
    await pages.invalid_EmailPasswordCheck();

    await page.pause();
});
