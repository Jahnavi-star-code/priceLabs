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
  it("Row/Column Filter", () => {
    HelperFunctions.rowColumnFilter(minfilterToApply, minPriceColumn);
    HelperFunctions.rowColumnFilter(tagFilterToApply, tagsColumn);
  });
  it("Quick Filter", () => {
    HelperFunctions.quickFilters("dummypms", "Dummy PMS");
    HelperFunctions.quickFilters("guesty", "Guesty");
  });
  it("Saving Quick Filter and Deleting", () => {
    filterfn.quickFilter();
    filterfn.mainFilter("Dummy PMS", "pms", "pms");
    filterfn.childFilter("Guesty", "pms");

    //br_size
    filterfn.mainFilter("Room", "br_size", "brCount", true);
    Click.on(filterSelectors.applyFilters);
  });
});
