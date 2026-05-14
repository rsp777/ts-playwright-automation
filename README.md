Markdown
# playwright-pom-framework

An end-to-end (E2E) UI automation framework built with **Playwright** and **TypeScript**. This project serves as a functional implementation of the Page Object Model (POM) design pattern for automated web testing.

## 🎯 Project Overview

The primary goal of this repository is to build a scalable, maintainable test architecture by separating UI interaction logic (locators and clicks) from business logic (assertions and test flows). 

**Current Target Application:** [Practice Test Automation](https://practicetestautomation.com/practice-test-login/)

## 🛠 Tech Stack

*   **Automation Tool:** Playwright
*   **Language:** TypeScript
*   **Assertion Library:** Playwright Test `expect`
*   **Node Package Manager:** npm

## 🚀 Setup & Installation

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16 or higher)
*   IDE (VS Code recommended)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/playwright-pom-framework.git](https://github.com/your-username/playwright-pom-framework.git)
   
Navigate to the project directory:

Bash
cd playwright-pom-framework
Install the dependencies:

Bash
npm install
Install Playwright browsers:

Bash
npx playwright install


## 🧪 Running the Tests

To execute the test suite, run the following commands in your terminal:

**Run all tests in headless mode (default):**
```bash
npx playwright test
Run tests in UI mode (visual debugging):

Bash
npx playwright test --ui
Run a specific test file (e.g., login):

Bash
npx playwright test login.spec.ts --headed
Generate and view the HTML report:

Bash
npx playwright show-report
🗺 Roadmap & Architecture
```
## **Phase 1: Functional Mapping (Completed)**
[x] Initialized Playwright/TS environment.

[x] Mapped functional login scenario into code.

[x] Created login.spec.ts with direct locators and end-to-end assertions.

## **Phase 2: Page Object Model (POM) Refactoring (Up Next)**
[ ] Create a pages/ directory.

[ ] Extract raw locators from login.spec.ts into a dedicated LoginPage.ts class.

[ ] Create functional action methods (e.g., navigate(), login()) inside the Page Object.

[ ] Refactor the spec file to instantiate the LoginPage class, keeping only the test data and assertions.
