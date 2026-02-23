import HelperFunctions from "../../../utils/helpers/helperfunctions";
import testData from "../../../fixtures/multiCalender.json";
import multicalendarfns from "../../../pageObjects/multiCalender/multiCalenderfn";
import multicalenderPage from "../../../utils/selectors/multicalenderPage";
import Verify from "../../../utils/Interactions/assertions";
import Click from "../../../utils/Interactions/click";
describe("On Refreshing Page DSO persist Check", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
  });
  it("Editing and Verifying the Existing DSO", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property1;
    multicalendarfns.dateToOverridefn(propertyID, "2026-03-08");
    multicalendarfns.addDSO(
      propertyID,
      "2026-03-08",
      "2026-03-08",
      20,
      properName,
    );
    multicalendarfns.verifyinInlineDSO(propertyID, "2026-03-08");
    multicalendarfns.verifyingValuesOnDSO(20, 20, 20);
    multicalendarfns.verifyinInlineDSO(propertyID, "2026-03-08");
    multicalendarfns.updatingPriceValues(30, 40, 50, "2026-03-08", propertyID);
    multicalendarfns.verifyinInlineDSO(propertyID, "2026-03-08");
    multicalendarfns.verifyingValuesOnDSO(30, 40, 50);
  });
});
