import HelperFunctions from "../../utils/helpers/helperfunctions";
import testData from "../../fixtures/multiCalender.json";
import multicalendarfns from "../../pageObjects/multiCalender/multiCalenderfn";
import multicalenderPage from "../../utils/selectors/multicalenderPage";
import Verify from "../../utils/Interactions/assertions";
describe("On Refreshing Page DSO persist Check", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
  });
  it("Creation of DSO and reload", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property1;
    multicalendarfns.dateToOverridefn(propertyID, "2026-03-08");
    multicalendarfns.addDSO(
      propertyID,
      "2026-03-08",
      "2026-03-08",
      20,
      properName,
    );
    cy.reload();
    Verify.theElement(`span[qa-id*="mc-dso-band-${propertyID}"]`).exists();
  });
});
