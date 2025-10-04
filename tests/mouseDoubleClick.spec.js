const { test, expect } = require('@playwright/test')

test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const button = await page.locator('//button[@ondblclick="myFunction1()"]');

    // Mouse Double Click Action

    await button.dblclick();

    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(2000);


});