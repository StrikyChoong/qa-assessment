# qa-assessment
For QA automation assessment test using Playwright

### Tech Stack, Design
Playwright framework, coded with Javascript with POM (Page Object Model) structure

### Setup & Installation
  1. Git clone the repo
  2. Perform `npm install` to install playwright

### Test Execution
  1. Execute the following commands
      `npx playwright test` or
      `npx playwright test --headed` (UI)

### Key Files
  1. `playwright.config.js`: configuration file for Playwright
  2. `tests\main.spec.js`: main spec file contains test case(s)
  3. `pages\main.page.js`: page object model to split the UI element into a dedicated file for code simplicity and reusability

### Addon - Cucumber with Playwright (first trial)
I have heard of Cucumber and its high level theory before but never get a chance to have hand-on with it.
After some studies, I decided to give it a try and push my change to this repo with Cucumber + Playwright.

It contains a `main.feature` feature file, with a support class on Custom World `main-world.js` and a test steps definition `main-steps.js`.
  1. to execute, run `npx cucumber-js` to execute it

Key reference
  1. https://github.com/Tallyb/cucumber-playwright
  2. https://medium.com/@manabie/how-to-use-playwright-in-cucumberjs-f8ee5b89bccc
  3. https://cucumber.io/docs/gherkin/reference/