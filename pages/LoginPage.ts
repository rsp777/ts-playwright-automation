import { expect, Locator, Page } from "playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly pageTitle;
    readonly usernameInput;
    readonly passwordInput;
    readonly submitButton;
    readonly loginHeading;
    readonly successHeading;
    readonly successMessage;
    readonly logoutLink;
    readonly loginTitle;
    readonly errorMessageContainer: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pageTitle = 'Test Login | Practice Test Automation';
        this.loginHeading = page.getByRole('heading', { name: "Test login" });
        this.usernameInput = page.getByRole('textbox', { name: "username" });
        this.passwordInput = page.getByRole('textbox', { name: "password" });
        this.submitButton = page.getByRole('button', { name: "submit" });
        this.successHeading = page.getByRole('heading', { name: 'Logged In Successfully' });
        this.successMessage = page.locator('text=Congratulations student. You successfully logged in!');
        this.logoutLink = page.getByRole('link', { name: "Log out" });
        this.loginTitle = 'Logged In Successfully | Practice Test Automation';
        this.errorMessageContainer = page.locator('#error');
    }

    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async fillLoginForm(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async submitLoginForm() {
        await this.submitButton.click();
    }

    async validateLoginSuccess() {
        await this.page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
        await expect(this.successHeading).toBeVisible();
        await expect(this.successMessage).toBeVisible();
        await expect(this.logoutLink).toBeVisible();
        await expect(this.page).toHaveTitle(this.loginTitle);
    }

    async validateLoginFailure(expectedErrorMessage: string) {
        await expect(this.loginHeading).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.submitButton).toBeVisible();
        await this.validateErrorMessage(expectedErrorMessage);
    }

    async validateErrorMessage(expectedMessage: string) {
        await expect(this.errorMessageContainer).toBeVisible();
        await expect(this.errorMessageContainer).toHaveText(expectedMessage);
    }

    async logout() {
        await this.logoutLink.click();
    }

    async verifyLoginPageElements() {
        await expect(this.page).toHaveTitle(this.pageTitle);
        await expect(this.loginHeading).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }

}