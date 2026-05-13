import { expect, test } from '@playwright/test';

test.describe('Login Tests', () => {
    test('TC1: Positive LogIn test @sanity @smoke', async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await expect(page).toHaveTitle('Test Login | Practice Test Automation');
        await expect(page.getByRole('heading', { name: "Test login" })).toBeVisible();
        await expect(page.getByRole('textbox', { name: "username" })).toBeVisible();
        await expect(page.getByRole('textbox', { name: "password" })).toBeVisible();
        await expect(page.getByRole('button', { name: "submit" })).toBeVisible();

        await page.getByRole('textbox', { name: "username" }).fill('student');
        await page.getByRole('textbox', { name: "password" }).fill('Password123');
        await page.getByRole('button', { name: "submit" }).click();
        await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
        await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
        await expect(page.locator('text=Congratulations student. You successfully logged in!')).toBeVisible();
        await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
        await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

        await page.getByRole('link', { name: "Log out" }).click();
        await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
        await expect(page.getByRole('heading', { name: "Test login" })).toBeVisible();
        await expect(page.getByRole('textbox', { name: "username" })).toBeVisible();
        await expect(page.getByRole('textbox', { name: "password" })).toBeVisible();
        await expect(page.getByRole('button', { name: "submit" })).toBeVisible();

    });
});
