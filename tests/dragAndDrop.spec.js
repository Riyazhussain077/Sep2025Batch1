const { test, expect } = require('@playwright/test')

test('Drag And Drop', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const drag = await page.locator('div#draggable');
    const drop = await page.locator('div#droppable');

    // Approach 1  -> using Hover

    // await drag.hover();
    // await page.mouse.down();

    // await drop.hover();
    // await page.mouse.up();

    // Approach 2   

    await drag.dragTo(drop);
    await expect(page.locator('//p[text()="Dropped!"]')).toHaveText('Dropped!');

    await page.waitForTimeout(3000);
});