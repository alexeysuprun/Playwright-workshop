import { test, expect } from '@playwright/test';

test('Open new windows and navigate back', async ({ context, page })=>{
    await page.goto("file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_5/index.html");
    const pagePromise = context.waitForEvent('page');
    await page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.getByRole('heading', {
        name: 'Welcome to the New Page'
    })).toBeVisible();
});


test('Add Cookie', async ({context, page})=>{
    await page.goto('file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', sessionCookie);
    // expect(sessionCookie).toBeDefined();
});

test('Delete cookie', async({context, page})=>{
    await page.goto('file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie',sessionCookie);

    await page.click('#deleteCookie');
    const deletedCookies = await page.context().cookies('file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_5/index.html');
    const deletedSessionCookie = deletedCookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie',deletedSessionCookie);
    await expect(deletedSessionCookie).toBeUndefined();

})

