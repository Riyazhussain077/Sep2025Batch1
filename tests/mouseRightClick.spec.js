const {test,expect} = require ('@playwright/test')


test('Mouse Right Click Actions' , async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const abc = await page.locator('//span[text()="right click me"]');

    // Mouse Right Click..

    await abc.click({button : 'right'});
    await page.waitForTimeout(2000);

});