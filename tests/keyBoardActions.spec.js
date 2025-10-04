const { test, expect } = require('@playwright/test')

test('KeyBoard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('//textarea[@placeholder="Paste one version of the text here."]')
        .fill('Hello All..');

    // Ctrl + A      -> Select the text

    await page.keyboard.press('Control+A');

    // Ctrl + C      -> Copy the text

    await page.keyboard.press('Control+C');

    // TAB    

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');


    // Ctrl + V         -> Paste the text

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);
});