import priceOvverapifn from "../../pageObjects/apiFn.js/priceOvverapifn";
import HelperFunctions from "../../utils/helpers/helperfunctions";
import testData from "../../fixtures/multiCalender.json";
import multicalendarfns from "../../pageObjects/multiCalender/multiCalenderfn";
let authToken;
describe("Functionality On Filters", () => {
  it("Saving Quick Filter w/o any Filter applied", () => {
    priceOvverapifn.loginwithoutSession();
  });
});
