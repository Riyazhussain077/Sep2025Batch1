const {test,expect} = require ('@playwright/test')

test('Alerts with Ok' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog Window Handler 

    page.on('dialog' , async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    });

    //await page.locator('[id="alertBtn"]').click();
    await page.click('[id="alertBtn"]');
    await page.waitForTimeout(3000);


});


test('Alerts with confirm' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog Window Handler 

    page.on('dialog' , async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); // close by using OK
        //await dialog.dismiss(); // close by using cancel
    });

    await page.locator('[id="confirmBtn"]').click();
    await expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(3000);


});


test.only('Prompt Alert' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog Window Handler 

    page.on('dialog' , async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Revathi Rai'); // close by using OK
        //await dialog.dismiss(); // close by using cancel
    });

    await page.locator('[id="promptBtn"]').click();
    await expect(await page.locator('//p[@id="demo"]')).toHaveText('Hello Revathi Rai! How are you today?');
    await page.waitForTimeout(3000);


});

