export default class Type {
  static theText = (text) => ({
    into: (selector) => cy.get(selector).clear().type(text),
  });
  static theTextAndEnter = (text) => ({
    into: (selector) =>
      cy
        .get(selector)
        .clear()
        .type(text)
        .trigger("mouseenter", { force: true }),
  });
}
