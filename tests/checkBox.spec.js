const { test, expect } = require('@playwright/test')

test('Handle CheckBox', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Single CheckBox

    await page.locator('//input[@id="checkBoxOption2"]').check();
    await page.check('//input[@id="checkBoxOption2"]');

    await expect(await page.locator('//input[@id="checkBoxOption2"]')).toBeChecked();

    await expect(await page.locator('//input[@id="checkBoxOption2"]').isChecked()).toBeTruthy();
    await page.waitForTimeout(3000);
    await page.uncheck('//input[@id="checkBoxOption2"]');
    await expect(await page.locator('//input[@id="checkBoxOption2"]')).not.toBeChecked();

    await expect(await page.locator('//input[@id="checkBoxOption1"]').isChecked()).toBeFalsy();


    // Multiple ChechBoxes

    const checkBoxLocator = [
        '//input[@id="checkBoxOption1"]',
        '//input[@id="checkBoxOption2"]',
        '//input[@id="checkBoxOption3"]'
    ];

    for (const locator of checkBoxLocator) {
        await page.locator(locator).check();
    };

    await page.waitForTimeout(3000);

    for(const locator of checkBoxLocator) {
       if(await page.locator(locator).isChecked()) {
        await page.locator(locator).uncheck();
       }
    }

    await page.waitForTimeout(3000);
});