const { test, expect } = require('@playwright/test');

test('Mocking', async ({ page }) => {

    // 1) Mock the API

    await page.route("https://jsonplaceholder.typicode.com/posts", async route => {
        await route.fulfill({
            status: 400,
            contentType: 'application/json',
            body: JSON.stringify([{ title: "Mocked Post", id: 1 }]),
        });
    });
    // 2) open the page that calls the api..

    await page.goto('https://jsonplaceholder.typicode.com/posts');

    // 3) validate the fake data

    const text = await page.locator('body').innerText();
    await expect(text).toContain('Mocked Post');
});


// 1) GET       -> Fetch All the posts 

test('GET - fecth all post', async ({ request }) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/posts");
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Posts fetched:", body.length);
    expect(body.length).toBeGreaterThan(0);
});

// 2) POST   - Create a new post with the data

test('POST - Create a post', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            userId: 171,
            title: "Playwright Automation With API",
            body: "This is Created for API"
            // we can set any custom user id..
        }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log("Created Post Id:", body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Playwright Automation With API');

});

// 3) PUT     -> Update an existing post with new data

test('PUT - Update a post', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            userId: 171,      // we can set any custom user id..
            title: "Playwright Automation with APIRequestContext",
            body: "This post is Created for using API"

        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("Updated post Title:", body.title);
    expect(body.title).toBe('Playwright Automation with APIRequestContext');

});

// 4) DELETE     -> Delete a post

test('DELETE - delete a post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log("poat deleted");
});







