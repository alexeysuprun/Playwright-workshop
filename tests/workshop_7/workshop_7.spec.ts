import { test, expect } from '@playwright/test';

const selectors = {
    firstName: '#firstName',
    age: '#age',
    student: '#isStudent',
    apply: '#applyData'
}

test.describe('User registration page', ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("file:///C:/Users/supru/Desktop/Playwright-workshop/tests/workshop_7/index.html");
    })

  
    
    test('Declarations and Types', async ({page}) => {
        let firstName: string = 'John';
        let age: number = 30;
        let student: boolean = false;

        await page.fill(selectors.firstName, firstName);
        await page.fill(selectors.age, age.toString());
        await page.check(selectors.student);
        await page.click(selectors.apply);

        expect(await page.textContent('#displayFirstName')).toBe(firstName);
        expect(await page.textContent('#displayAge')).toContain(age.toString());
        expect(await page.isChecked('#isStudent')).toBe(true);
    })
})

test.describe('Type Defenitions and Interfaces', ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("file:///C:/Users/supru/Desktop/Playwright-workshop/tests/workshop_7/index.html");
    })
    
    type User = {
        firstName: string,
        age: number,
        isStudent: boolean
    };

    let user: User = {
        firstName: 'Jane',
        age: 25,
        isStudent: true
    }

    test('Declarations and Types', async ({page}) => {
        await page.fill(selectors.firstName, user.firstName);
        await page.fill(selectors.age, user.age.toString());
        await page.click(selectors.apply);

        expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
        expect(await page.textContent('#displayAge')).toContain(user.age.toString());
        expect(await page.isChecked('#isStudent')).not.toBe(user.isStudent);
    })
})