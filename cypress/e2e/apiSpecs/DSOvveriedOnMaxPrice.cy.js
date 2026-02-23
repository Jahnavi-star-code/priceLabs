import priceOvverapifn from "../../pageObjects/apiFn.js/priceOvverapifn";
import HelperFunctions from "../../utils/helpers/helperfunctions";
import testData from "../../fixtures/multiCalender.json";
import multicalendarfns from "../../pageObjects/multiCalender/multiCalenderfn";
let authToken;
describe("Functionality On Filters", () => {
  beforeEach(() => {
    HelperFunctions.globalIntercept();
    cy.login();
  });

  it("Saving Quick Filter w/o any Filter applied", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property2;
    priceOvverapifn.ovveridePrices({
      listingId: propertyID,
      basePrice: 30,
      minPrice: 35,
      maxPrice: 120,
      minStay: 3,
      date: "2026-03-13",
    });
  });
  it("Integation API", () => {
    const { propertyID, propertyDataVerify, properName } = testData.property3;
    priceOvverapifn.ovveridePrices({
      listingId: propertyID,
      minStay: 6,
      date: "2026-03-12",
    });
    cy.visit("/multicalendar");
    cy.url().should("include", "/multicalendar");
    HelperFunctions.search(propertyID);
    multicalendarfns.verifyinInlineDSO(propertyID, "2026-03-12");
  });
});
