// import test from "node:test";
import { test, expect } from '@playwright/test';
import { RegisterPage} from "../pages/RegisterPage.js";
    
test('Registration successful', async ({ page }) => {
    const pages = new RegisterPage(page);

    // Have a unique email on each execution
    // const uniqueEmail =  `testing_${Date.now()}@gmail.com`;
    const uniqueEmail = `qa.user.${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;


    // Website open
    await pages.page_Open();

    // REGISTER
    await pages.click_RegisterLink();
    await pages.gender_Selection();
    await pages.first_Name("carol");
    await pages.last_Name("hamington");
    await pages.email_Address(uniqueEmail);
    await pages.password_Input("password01");
    await pages.confirm_Password("password01");
    await pages.register_button();

    // Register Confirmation page
    await pages.registration_completeText();
    await pages.registration_completeContinue();

    await page.pause();
    // await pages.pageClose();
});
