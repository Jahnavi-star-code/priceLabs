PriceLabs Automation Framework
Overview

This repository contains end-to-end UI automation tests for the PriceLabs application using Cypress. The framework is designed to validate key user workflows in the Multi-Calendar module, including price configuration, filter management, and calendar interactions.

The objective of this project is to demonstrate practical automation skills, including dynamic element handling, asynchronous operations, reusable test design, and real-world test scenarios.

Tech Stack

Cypress (UI Automation)

JavaScript (ES6)

Node.js

npm

Project Structure
priceLabs/
│
├── cypress/
│   ├── e2e/              # Test cases
│   ├── fixtures/         # Test data
│   ├── support/          # Custom commands and reusable utilities
│
├── cypress.config.js     # Cypress configuration
├── package.json          # Project dependencies and scripts
├── .gitignore
└── README.md
Test Coverage
Functional Tests

Multi-calendar date selection

Filter creation and validation

Price update functionality

Calendar navigation and interaction

End-to-End Scenarios

Create a filter and verify it under Quick Filters

Select dates and apply pricing changes across the calendar

Negative Tests

Invalid price input validation

Boundary value checks

Verification of warning and error messages

UI Interaction Handling

Dynamic elements (Chakra UI components)

Table and calendar indexing

Drag and drop operations

Assertion of success messages and alerts

Key Framework Features

Reusable custom Cypress commands

Dynamic locator strategies (avoiding hard-coded selectors)

Proper handling of asynchronous operations

Robust assertions for UI validation

Scalable folder structure for future enhancements

Prerequisites

Make sure the following are installed:

Node.js (v14 or above)

npm

Installation

Clone the repository:

git clone https://github.com/Jahnavi-star-code/priceLabs.git
cd priceLabs

Install dependencies:

npm install
Running Tests

Open Cypress Test Runner:

npm run cypress:open

Run tests in headless mode:

npm run cypress:run

Run tests in Chrome browser:

npm run test:chrome
Configuration

Base URL and environment settings can be configured in:

cypress.config.js

Example:

env: {
  baseUrl: "https://app.pricelabs.co"
}
Future Enhancements

Page Object Model (POM) implementation

API automation using cy.api
