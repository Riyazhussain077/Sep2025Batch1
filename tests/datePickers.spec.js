import { test, expect } from '@playwright/test'

test('Date Pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('//input[@id="datepicker"]', '10/7/2025');

    // Date Pickers..

    const month = 'October';
    const year = '1980';
    const date = '5';

    await page.click('//input[@id="datepicker"]'); // opens the calender

    while(true) {
        const presentMonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();
        const presentYear = await page.locator('//span[@class="ui-datepicker-year"]').textContent();

        if(presentMonth == month && presentYear == year ) {
            break;
        }

        //await page.locator('[title="Next"]').click(); // Next in Calender
        await page.locator('[title="Prev"]').click(); // Past in calender
    }

    const dates = await page.$$('//a[@class="ui-state-default"]');

    // Date Selection - using Loop

    // for(const dt of dates) {
    //     if(await dt.textContent() == date ){
    //         await dt.click();
    //         break;
    //     }
    // };

    // date Selection - without using Loop

    //await page.click('//a[@class="ui-state-default"][text()="22"]');


    await page.locator(`//a[@class="ui-state-default"][text()='${date}']`).click();

await page.waitForTimeout(2000);
});