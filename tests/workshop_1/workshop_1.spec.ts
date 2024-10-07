import { test, expect } from '@playwright/test';

test.skip('Basic Navigation', async ({page})=>{
    await page.goto("https://about.gitlab.com");
    await page.waitForTimeout(3000);
    await page.reload();
});

test.skip('Interacting with Web Element on GitLab', async ({page})=>{
    await page.goto("https://about.gitlab.com");
    await page.locator('#be-navigation-desktop').getByRole('link', {name: 'Get free trial'}).click();
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Snow');
    await page.getByTestId('new-user-first-name-field').fill('John');
    await page.getByTestId('new-user-last-name-field').fill('Snow');
});

test('Using various Locator methods', async ({page})=>{
    await page.goto("https://about.gitlab.com");
    // await page.getByRole('button', {name: 'Main menu'}).click();
    await page.getByRole('link', {name: 'Sign in'}).click();
    // await page.locator('#be-navigation-desktop :has-text("Sign in")').click();
    await expect(page).toHaveURL('https://gitlab.com/users/sign_in')
});