const { test, expect } = require('@playwright/test')

test('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // click on the login Button           -> CSS

    await page.locator('#login2').click();
    //await page.click('#login2');

    // Provide UserName                    -> CSS

    await page.locator('[id="loginusername"]').fill('pavanol');
    //await page.fill('[id="loginusername"]' , 'pavanol');


    // Provide Password                     -> Xpath

    //await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.type('//input[@id="loginpassword"]', 'test@123');

    // click on the login Button

    //await page.locator("//button[text()='Log in']").click();
    await page.click('//button[text()="Log in"]');

    // verify the logout presence

    const logoutLink = await page.locator('//a[contains(text(),"og out")]');
    await expect(logoutLink).toBeVisible();

    await page.waitForTimeout(3000);

});
