import multicalendarfns from "../../../pageObjects/multiCalender/multiCalenderfn";
import HelperFunctions from "../../../utils/helpers/helperfunctions";
import multicalenderPage from "../../../utils/selectors/multicalenderPage";
import filterfn from "../../../pageObjects/multiCalender/filtersfns";
import Click from "../../../utils/Interactions/click";
import filterSelectors from "../../../utils/selectors/filterSelectors";
import testData from "../../../fixtures/multiCalender.json";
const { minfilterToApply, tagFilterToApply, tagsColumn, minPriceColumn } =
  multicalenderPage;
describe("Functionality On Filters", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
  });
  it("Saving Quick Filter w/o any Filter applied", () => {
    filterfn.savingQuickFilterwithoutfilter();
  });
  it("Adding Empty Notes to the list", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property1;
    filterfn.addingEmptyNotes(propertyID);
  });
});
