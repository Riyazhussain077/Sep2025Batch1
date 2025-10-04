const { test, expect } = require('@playwright/test')


test('Page ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({path : 'tests/screenShot/'+ Date.now() + 'Homepage.png'})

});

test('Full Page ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({path : 'tests/screenShot/'+ Date.now() + 'Fullpage.png' , fullPage:true})

});

test.only('Element ScreenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//img[@alt="Figurines, vases & more"]')
    .screenshot({path : 'tests/screenShot/'+ Date.now() + 'Element.png' , })

});


