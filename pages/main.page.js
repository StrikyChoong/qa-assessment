import { expect } from '@playwright/test';

export const MainPage = class Main {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnAddInboxe = page.getByRole('button', { name: 'Add inboxe' });
    this.txtUserName = page.getByPlaceholder('user name');
    this.btnAdd = page.getByRole('button', { name: 'Add now!' });
    this.cbxDomain = page.getByRole('combobox');
    this.fraLeftPanel = page.locator("div[class='md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden']");
  }

  async setDomain(domain) {
    await this.cbxDomain.selectOption(domain);
  }
};

