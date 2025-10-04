const { test, expect } = require('@playwright/test')

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/');
    await page.click('//a[@id="login2"]');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');
});

test.afterEach(async () => {

    await page.click('#logout2');

})

test('Home Page Test', async () => {

    const products = await page.locator('//h4[@class="card-title"]');
    await expect(products).toHaveCount(9);
 
});

test('Add product to cart', async () => {

    await page.locator("//a[text()='Sony xperia z5']").click();
    await page.locator('[onclick="addToCart(6)"]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });

});