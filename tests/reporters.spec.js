const { test, expect } = require('@playwright/test')

test('Test 1', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveURL('https://www.demoblaze.com/')
});

test('Test 2', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
});

test('Test 3', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/test-reporters');
    await expect(page).toHaveURL('https://playwright.dev/docs/test-reporters');
})