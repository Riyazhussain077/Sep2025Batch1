const { test, expect } = require('@playwright/test')

const loginData = [
    { username: 'pavanol', password: 'test@123' },
    { username: 'abc', password: 'abc@123' }
];

for (const data of loginData) {

    test(`Login with details :  ${data.username}`, async ({ page }) => {

        await page.goto('https://www.demoblaze.com/');
        await page.click('#login2');
        await page.fill('#loginusername', data.username);
        await page.fill('#loginpassword', data.password);
        await page.click('[onclick="logIn()"]');

        if (data.username === 'pavanol' && data.password === 'test@123') {
            const logoutLink = await page.locator('[onclick="logOut()"]');
            await expect(logoutLink).toBeVisible()
        } else {
            page.on('dialog', async (dialog) => {
                console.log(`dialog message:' ${dialog.message()}`);
                await dialog.dismiss();
            });
        }
        await page.waitForTimeout(2000);
    });
}