import multicalendar from "../selectors/multicalenderPage";
import Verify from "../Interactions/assertions";
import Click from "../Interactions/click";
const { searchLoc, paginationLoc, rowColumnFilterbtn, minfilterToApply } =
  multicalendar;
export default class HelperFunctions {
  static globalIntercept = () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  };
  static search = (propertyID) => {
    cy.get(searchLoc).clear().type(propertyID);
    cy.get(paginationLoc).should("contain", "1 to 1 of 1");
  };

  static errToastValidation = (sel, text) => {
    Verify.theElement(sel).contains(text);
  };
  static rowColumnFilter = (filterToApplyLoc, selector) => {
    Click.on(rowColumnFilterbtn);
    Click.on(filterToApplyLoc);
    Click.on(rowColumnFilterbtn);
    Verify.theElement(`div[qa-id="calendar-header-${selector}"]`)
      .exists()
      .and("be.visible");
  };
  static formattingDate = (date) => {
    const selectedDate = new Date(date);
    let formattedDate = selectedDate.toISOString().split("T")[0];
    return formattedDate;
  };
  static quickFilters = (qs, filter) => {
    cy.intercept({
      method: "GET",
      url: "**/api/listings*",
      query: {
        pms: qs,
      },
    }).as("getListings");
    Click.on('button[qa-id="qf-quick-filters-menu-button"]');
    Click.on('div[qa-id="qf-pms-filters"]');
    // Click.on('p[qa-id="qf-pms-filters-list-Dummy PMS"]');
    cy.get(`p[qa-id="qf-pms-filters-list-${filter}"]`).click({ force: true });
    cy.wait("@getListings").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.query.pms).to.eq(qs);
    });
  };
}
