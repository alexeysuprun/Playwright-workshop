import { test, expect } from '@playwright/test';

test('Handling Alerts', async ({page})=>{
    await page.goto("file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_3/index.html");

    await page.hover('button#hover-me');
    expect( await page.textContent('button#hover-me')).toContain('Text Changed!');

    await page.click('button#context-menu', {button: 'right'});
    expect( await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('button#double-click');
    expect(await page.locator('img').count()).toBe(1);
});


