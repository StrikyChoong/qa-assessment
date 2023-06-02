import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page'

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

/*
 * Add and Verify Email to Inbox
*/
test('add and verify new email is addedd successfully to user inboxes', async ({ page }) => {
  // Initialization of Page Object + Variables
  const mainPage = new MainPage(page);
  var date = new Date().toISOString().replace(/-/g, '').split('T')[0];
  var time = new Date().toTimeString().replace(/:/g, '').split(' ')[0];
  var user = 'test_' + date + '_' + time;
  var domain = 'getnada.com';
  var email = user + '@' + domain;

  // Click on 'Add Inboxe' button
  await mainPage.btnAddInboxe.click();

  // Assert if the add inboxe UI is displayed correctly
  // Assert the email doesn't exist yet on the page
  await expect (mainPage.cbxDomain).toBeVisible();
  expect (page.locator('span').filter({ hasText: email })).toBeHidden();

  // Set domain, type user email and click 'Add' button
  await mainPage.setDomain(domain);
  await mainPage.txtUserName.clear();
  await mainPage.txtUserName.type(user);
  await mainPage.btnAdd.click();

  // Assert if the add inboxe UI is closed and the added user email is adedd to the page
  // By narrowing the DOM to only left panel, assert both "Your Inboxes" and user email exist in the same DOM
  await expect (mainPage.cbxDomain).toBeHidden();
  await expect (mainPage.fraLeftPanel.locator('h6').filter({ hasText: 'Your Inboxes' })).toHaveCount(1);
  await expect (mainPage.fraLeftPanel.locator('h6').filter({ hasText: 'Your Inboxes' })).toBeVisible();
  await expect (mainPage.fraLeftPanel.locator('span').filter({ hasText: email })).toHaveCount(1);
  await expect (mainPage.fraLeftPanel.locator('span').filter({ hasText: email })).toBeVisible();

  // Additionally, get the pos of the 2 elements and assert if user email exists under "Your Inboxes"
  // "Your Inboxes" will have lower value of y-axis as it appear before the user email
  const posInboxes = await mainPage.fraLeftPanel.locator('h6').filter({ hasText: 'Your Inboxes' }).boundingBox();
  const postEmail = await mainPage.fraLeftPanel.locator('span').filter({ hasText: email }).boundingBox();
  expect (posInboxes.y).teLessThan(postEmail.y);
});
