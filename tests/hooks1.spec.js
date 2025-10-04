const { test, expect } = require('@playwright/test')

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //Login Page

    await page.click('//a[@id="login2"]');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Home Page

    const products = await page.locator('//h4[@class="card-title"]');
    await expect(products).toHaveCount(9);

    // Logout Page

    await page.click('#logout2');
});

test('Add product to cart', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //Login Page

    await page.click('//a[@id="login2"]');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Add product to Cart

    await page.locator("//a[text()='Sony xperia z5']").click();
    await page.locator('[onclick="addToCart(6)"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });

    // Logout Page

    await page.click('#logout2');
});