const { test, expect } = require('@playwright/test');
const TodoLyPage = require('./todoLyPage');

test('Login and Register flows', async ({ page }) => {
    const todoLyPage = new TodoLyPage(page);

    // Test Login flow
    await todoLyPage.goto();
    await todoLyPage.login('rene', 'rene123');
    // Add assertions for successful login
    await expect(page).toHaveURL('https://todo.ly/');

    // Test Register flow
    await todoLyPage.goto();
    await todoLyPage.register('rene123@gmail.com', 'Test123');
    // Add assertions for successful registration
    await expect(page).toHaveURL('https://todo.ly/');
});
