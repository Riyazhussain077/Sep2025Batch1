const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test('POM Check', async ({ page }) => {

    // Login Page
    const login = new LoginPage(page);
    await login.gotoURL();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(2000);

    // Home Page
    const home = new HomePage(page);
    await home.addProduct('Sony xperia z5');
    await page.waitForTimeout(2000);
    await home.gotoCart();

    // Cart Page

    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    const result = await cart.checkProduct('Sony xperia z5');
    await expect(result).toBe(true);

});