import multicalendarfns from "../../../pageObjects/multiCalender/multiCalenderfn";
import HelperFunctions from "../../../utils/helpers/helperfunctions";
import multicalenderPage from "../../../utils/selectors/multicalenderPage";
import filterfn from "../../../pageObjects/multiCalender/filtersfns";
import Click from "../../../utils/Interactions/click";
import filterSelectors from "../../../utils/selectors/filterSelectors";
const { minfilterToApply, tagFilterToApply, tagsColumn, minPriceColumn } =
  multicalenderPage;
describe("Functionality On Filters", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
  });
  it("Sync ON/OFF", () => {
    filterfn.verfyingSyncON();
    filterfn.verfyingSyncOFF();
  });
});
