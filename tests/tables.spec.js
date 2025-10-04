const { test, expect } = require('@playwright/test')

test('Handling Tables', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1) Total Number od Rows and Columns..

    const columns = await table.locator('thead tr th');
    console.log("Number of columns :", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Number of Rows:", await rows.count());
    expect(await rows.count()).toBe(5);

    // 2) Select check box for any product

    const selectedProduct = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })

    const checkBox = selectedProduct.locator('input').first();
    await checkBox.check();

    // 3) Select Multiple products

    await products(rows, page, 'Smartphone');
    await products(rows, page, 'Laptop');
    await products(rows, page, 'Smartwatch');
    await products(rows, page, 'Wireless Earbuds');

    //4) print all product details using loop

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const datas = row.locator('td');

        for (let j = 0; j < await datas.count() - 1; j++) {
            console.log(await datas.nth(j).textContent());

        }
    }

    // 5) read data from all pages from the tables..

    const pages = await page.locator('#pagination li');
    console.log("Number of pages:", await pages.count());

    for (let a = 0; a < await pages.count(); a++) {
        if (a > 0) {
            await pages.nth(a).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const datas = row.locator('td');

            for (let j = 0; j < await datas.count() - 1; j++) {
                console.log(await datas.nth(j).textContent());

            }
        }

    }

    await page.waitForTimeout(2000);
});

async function products(rows, page, name) {
    const selectedProduct = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await selectedProduct.locator('input').check();

}