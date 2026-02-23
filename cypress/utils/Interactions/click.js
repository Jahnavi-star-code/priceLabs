import "cypress-real-events/support";
export default class Click {
  static on = (selector) => cy.get(selector).click({ force: true });
  static realOnClick = (selector) =>
    cy.get(selector).should("be.visible").realClick();
  static containText = (selector, text) => {
    const newtext = new RegExp(`/^${text}$/`);
    cy.get(selector).contains(newtext).click();
  };
  static containJustText = (text) => cy.contains(text).realClick();
}
