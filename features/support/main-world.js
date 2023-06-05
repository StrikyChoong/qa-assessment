const { setWorldConstructor } = require("@cucumber/cucumber");
const playwright = require('playwright');

class CustomWorld {
    // Initialization of required variables
    constructor() {
        this.date = new Date().toISOString().replace(/-/g, '').split('T')[0];
        this.time = new Date().toTimeString().replace(/:/g, '').split(' ')[0];
        this.user = 'test_' + this.date + '_' + this.time;
        this.domain = 'getnada.com';
        this.email = this.user + '@' + this.domain;
    }

    async openUrl(url) {
        const browser = await playwright.chromium.launch({
            headless: false,
        });
        const context = await browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(url);
    }
}

setWorldConstructor(CustomWorld);