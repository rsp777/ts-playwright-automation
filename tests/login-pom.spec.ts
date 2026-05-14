import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';




test.describe('Login Tests', () => {
    // 1. Declare the variable outside so all tests can access it
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        await test.step('[Step 1] Navigate to Login Page', async () => {
            await loginPage.navigate();
        })

        await test.step('[Step 2] Verify Login Page Elements', async () => {
            await loginPage.verifyLoginPageElements();
        })
    });

    test.afterEach(async () => {
        await test.step('[Step 6] Logout and verify Login Page Elements', async () => {
            if (await loginPage.logoutLink.isVisible()) {
                await loginPage.logout();
                await loginPage.verifyLoginPageElements();
            }
        })

    });

    test('TC1: Positive Login Test @sanity @smoke', async ({ }) => {

        await test.step('[Step 3] Fill Login Form', async () => {
            await loginPage.fillLoginForm('student', 'Password123');
        });

        await test.step('[Step 4] Submit Login Form', async () => {
            await loginPage.submitLoginForm();
        })

        await test.step('[Step 5] Verify Login Success', async () => {
            await loginPage.validateLoginSuccess();
        })
    });

    test('TC2: Negative Login Test : Username @sanity @smoke', async ({ }) => {

        await test.step('[Step 3] Fill Login Form', async () => {
            await loginPage.fillLoginForm('studenrt', 'Password123');
        });

        await test.step('[Step 4] Submit Login Form', async () => {
            await loginPage.submitLoginForm();
        })

        await test.step('[Step 5] Verify Login Failure', async () => {
            await loginPage.validateLoginFailure('Your username is invalid!');
        })
    });

    test('TC3: Negative Login Test : Password @sanity @smoke', async ({ }) => {

        await test.step('[Step 3] Fill Login Form', async () => {
            await loginPage.fillLoginForm('student', 'Password1233');
        });

        await test.step('[Step 4] Submit Login Form', async () => {
            await loginPage.submitLoginForm();
        })

        await test.step('[Step 5] Verify Login Failure', async () => {
            await loginPage.validateLoginFailure('Your password is invalid!');
        })
    });

    test('TC4: Negative Login Test : Empty Credentials @sanity @smoke', async ({ }) => {

        await test.step('[Step 3] Submit Login Form', async () => {
            await loginPage.submitLoginForm();
        })

        await test.step('[Step 4] Verify Login Failure', async () => {
            await loginPage.validateLoginFailure('Your username is invalid!');
        })
    });

});