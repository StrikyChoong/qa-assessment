const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');

Given("Bob opens Getnada website", { timeout: 60 * 1000 }, async function () {
    await this.openUrl('https://getnada.com');
});

When("Bob tries to add his email with @getnada domain at getnada", async function () {
    // Click on 'Add Inboxe' button
    await this.page.getByRole('button', { name: 'Add inboxe' }).click();

    // Assert if the add inboxe UI is displayed correctly
    // Assert the email doesn't exist yet on the page
    await expect (this.page.getByRole('combobox')).toBeVisible();
    expect (this.page.locator('span').filter({ hasText: this.email })).toBeHidden();

    // Set domain, type user email and click 'Add' button
    await this.page.getByRole('combobox').selectOption(this.domain);
    await this.page.getByPlaceholder('user name').clear();
    await this.page.getByPlaceholder('user name').type(this.user);
    await this.page.getByRole('button', { name: 'Add now!' }).click();
});

Then("Bob sees his email added successfully under \"Your Inboxe\" section", async function () {
    this.fraLeftPanel = this.page.locator("div[class='md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden']");

    // Assert if the add inboxe UI is closed and the added user email is adedd to the pag
    // By narrowing the DOM to only left panel, assert both "Your Inboxes" and user email exist in the same DOM
    await expect (this.page.getByRole('combobox')).toBeHidden();
    await expect (this.fraLeftPanel.locator('h6').filter({ hasText: 'Your Inboxes' })).toHaveCount(1);
    await expect (this.fraLeftPanel.locator('h6').filter({ hasText: 'Your Inboxes' })).toBeVisible();
    await expect (this.fraLeftPanel.locator('span').filter({ hasText: this.email })).toHaveCount(1);
    await expect (this.fraLeftPanel.locator('span').filter({ hasText: this.email })).toBeVisible();

    // Additionally, get the pos of the 2 elements and assert if user email exists under "Your Inboxes"
    // "Your Inboxes" will have lower value of y-axis as it appear before the user email
    const posInboxes = await this.fraLeftPanel.locator('h6').filter({ hasText: 'Your Inboxes' }).boundingBox();
    const postEmail = await this.fraLeftPanel.locator('span').filter({ hasText: this.email }).boundingBox();
    expect (posInboxes.y).toBeLessThan(postEmail.y);
});