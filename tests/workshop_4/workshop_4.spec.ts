import { test, expect } from '@playwright/test';

test('Handling alerts', async ({page})=>{
    await page.goto("file:///C:/Users/oleksii.suprun/Desktop/Playwright-workshop/tests/workshop_4/index.html");
    let alertMessage = '';

    page.on('dialog', async(dialog) => {
        expect(dialog.type()).toBe('alert');
        alertMessage = dialog.message();
        await dialog.accept();
    })
    await page.click('#show-alert');
    // await page.waitForTimeout(3000);
    expect(alertMessage).toBe('This is a simple alert.');
});

test('Confirm Alert', async ({page})=>{
    await page.goto('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_4/index.html');
    let alertMessage = '';
    page.on('dialog', async(dialog) =>{
        alertMessage = dialog.message();
        await page.waitForTimeout(4000);
        await dialog.dismiss();
    })
    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked Cancel.');
})

test('Handlng POP-UPs', async ({page})=>{
    await page.goto('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_4/index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup'),
    ]);
    await popup.waitForLoadState();
//     if(popup.url() === 'example url'){
// }
    await popup.close();
})
