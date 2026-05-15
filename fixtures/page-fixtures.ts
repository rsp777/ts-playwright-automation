import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await test.step('[Step 1] Navigate to Login Page', async () => {
            await loginPage.navigate();
        });

        await test.step('[Step 2] Verify Login Page Elements', async () => {
            await loginPage.verifyLoginPageElements();
        });

        await use(loginPage);
        await test.step('[Step 3] Logout and verify Login Page Elements', async () => {
            if (await loginPage.logoutLink.isVisible()) {
                await loginPage.logout();
                await loginPage.verifyLoginPageElements();
            }
        })

    }
});

export { expect } from '@playwright/test';