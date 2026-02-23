import HelperFunctions from "../../utils/helpers/helperfunctions";
import multicalenderPage from "../../../utils/selectors/multicalenderPage";
import multicalendarfns from "../../../pageObjects/multiCalender/multiCalenderfn";
import testData from "../../fixtures/multiCalender.json";

const { minfilterToApply } = multicalenderPage;
describe("DSO Spec", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
  });
  it("Single Cell Date Specific Override", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property1;
    multicalendarfns.dateToOverridefn(propertyID, "2026-02-28");
    multicalendarfns.addDSO(
      propertyID,
      "2026-02-28",
      "2026-02-28",
      20,
      properName,
    );

    // multicalendarfns.extractingBasePrice(propertyID);
  });
  it("Drag and Ovverride for Multiple Dates single List", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property2;
    HelperFunctions.search(propertyID);
    const startDate = "2026-03-04";
    const endDate = "2026-03-06";
    multicalendarfns.multipledateToOverridefn(startDate, endDate);
    multicalendarfns.addDSO(propertyID, startDate, endDate, 20, properName);
  });

  it("Deleting Existing DSO", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property3;
    multicalendarfns.dateToOverridefn(propertyID, "2026-02-27");
    multicalendarfns.addDSO(
      propertyID,
      "2026-02-27",
      "2026-02-27",
      20,
      properName,
    );
    multicalendarfns.deletingExistingOverride(propertyID, "2026-02-27");
  });
});
