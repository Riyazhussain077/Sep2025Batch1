const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames Count..

    const frames = await page.frames();
    console.log("Number of frames:", frames.length);

    // Approach 1 : By Name or URL

    //const frameName = await page.frame('name'); // If name is present, we can use that..

    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });

    // await frame1.fill('[name="mytext1"]', 'Hello All..');

    // await page.waitForTimeout(2000);


    // Approach 2 : using frame locator

   const frame1 =  await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]');

   frame1.fill('Good Afternoon..');
   await page.waitForTimeout(2000);
});