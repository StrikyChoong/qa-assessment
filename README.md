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
  4. `pages\main.page.js`: page object model to split the UI element into a dedicated file for code simplicity and reusability
