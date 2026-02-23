export default class Verify {
  static theElement = (sel) => ({
    contains: (text) =>
      cy
        .get(sel)
        .should("be.visible")
        .invoke("text")
        .should("match", new RegExp(`^${text}`, "i")),
    isEnabled: () => cy.get(sel).should("be.enabled"),
    isNotExist: () => cy.get(sel).should("not.exist"),
    exists: () => cy.get(sel).should("exist"),
    isNotChecked: () => cy.get(sel).should("not.be.checked"),
    isChecked: () => cy.get(sel).should("be.checked"),
    hasValue: (text) => cy.get(sel).should("have.value", text),
    isVisible: () => cy.get(sel).should("be.visible"),
  });
}
