import HelperFunctions from "../../utils/helpers/helperfunctions";
import testData from "../../fixtures/multiCalender.json";
import multicalendarfns from "../../pageObjects/multiCalender/multiCalenderfn";
import multicalenderPage from "../../utils/selectors/multicalenderPage";
import Verify from "../../utils/Interactions/assertions";
import Click from "../../utils/Interactions/click";
describe("Negative Scenarios On MultiCalender Feature", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
  });
  it("Min Price less than Fixed Price", () => {
    //Fixed custom pricing should be greater than 10
    const { propertyID, propertyDataVerify, properName } = testData.property1;
    multicalendarfns.dateToOverridefn(propertyID, "2026-03-08");
    multicalendarfns.validationOnUnderFixedPrice(10);
  });
  it("Not Selecting Day For Min Stay", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property1;
    multicalendarfns.dateToOverridefn(propertyID, "2026-03-10");
    multicalendarfns.notSelectingDayForMinStay();
  });
});
