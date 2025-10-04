const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select option from the dropdown

    // await page.locator('#country').selectOption({ label: 'Canada' });  // label in visible text
    // await page.locator('#country').selectOption(['Germany' , 'Canada' , 'India']'); // Visible text
    // await page.locator("#country").selectOption({index : 2 }); // by using index
    // await page.locator('#country').selectOption({value: "usa"}); // by using value
    // await page.selectOption('#country' , 'Australia'); // by text


    // Assertions

    // 1) check number of options in dropdown        -> method 1
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);


    // 2) check number of options in dropdown        -> method 2
    // const options = await page.$$('#country option');
    // console.log("Number of countries:" , options.length);
    // await expect(options.length).toBe(10);


    // 3)  Check presence of the value in the dropdown   -> Method 1

    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();

    // 4) Check presence of the value in the dropdown    -> method 2  (using loop)


    const options = await page.$$('#country option');

    for (const option of options) {
        //console.log(await option.textContent());
        let value = await option.textContent();
        if (value.includes('France')) {
            console.log(await option.textContent());
            break;
        }

    }

    await page.waitForTimeout(1000);
});