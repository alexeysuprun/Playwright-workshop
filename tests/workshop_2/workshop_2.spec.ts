import { test, expect } from '@playwright/test';

test('Automation Form Submissions', async ({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc");

    const newToDo =  page.getByPlaceholder('What needs to be done?');
    await newToDo.fill('John Doe');
    await newToDo.press('Enter');
    await newToDo.fill('JJJJJ Doe');
    await newToDo.press('Enter');
    // await page.waitForTimeout(3000);

    const firstToDo = page.getByTestId("todo-item").nth(0);
    // await firstToDo.check();
    await firstToDo.getByRole('checkbox').check();
    const secondToDo = page.getByTestId("todo-item").nth(1);
    // await secondToDo.getByRole('checkbox').check();


    await expect(firstToDo).toHaveClass('completed');
    await expect(secondToDo).not.toHaveClass('completed');
    
});


test('Handling form', async ({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc");
    const placeholder = '[placeholder="What needs to be done?"]';

    await page.fill(placeholder, 'John Doe');
    await page.locator(placeholder).press('Enter');

    const checkbox = await page.locator('.toggle');
    await checkbox.check();
});

