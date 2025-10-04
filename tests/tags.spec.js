const { test, expect } = require('@playwright/test')

test('Test 1@amazon', async ({ page }) => {
    console.log("This is Tag Test 1..");
});

test('Test 2@flipkart', async ({ page }) => {
    console.log("This is Tag Test 2..");
});

test('Test 3@amazon', async ({ page }) => {
    console.log("This is Tag Test 3..");
});

test('Test 4@flipkart', async ({ page }) => {
    console.log("This is Tag Test 4..");
});

test('Test 5@amazon@flipkart', async ({ page }) => {
    console.log("This is Tag Test 5..");
});