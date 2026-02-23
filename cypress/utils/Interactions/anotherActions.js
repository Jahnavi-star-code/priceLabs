export default class restActions {
  static theCheckBox = (selector) => cy.get(selector).check();
  static selectOptions = (selector, option) => cy.get(selector).select(option);
}
