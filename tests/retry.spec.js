const { test, expect } = require('@playwright/test')

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const hello = await page.locator('//span[@class="nav-line-2 "]');
    const account = await page.locator("//span[text()='Your Account']");

    // MOUSE HOVER

    await hello.hover();
    await page.waitForTimeout(2000);
    await account.click();

    await page.waitForTimeout(3000);

});