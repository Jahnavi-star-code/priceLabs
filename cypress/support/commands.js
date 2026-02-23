// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
import user from "../pageObjects/signin/user.json";
import siginselectors from "../utils/selectors/login";
Cypress.Commands.add("login", () => {
  const { useremail, password } = user;
  const { usernameInput, passwordInput, submitbtn, verifyImage } =
    siginselectors;
  cy.session("loginsession", () => {
    cy.visit("https://pricelabs.co/signin");
    cy.get(usernameInput).type(useremail);
    cy.get(passwordInput).type(password);
    cy.get(submitbtn).click();
    cy.url().should("include", "app.pricelabs.co");
  });
});
