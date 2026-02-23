export default class ovverridethruApifn {
  static ovveridePrices(options = {}) {
    const {
      listingId,
      basePrice = "20",
      minPrice = "40",
      maxPrice = "100",
      minStay = "2",
      price = "40",
      date,
      parentKey = 2102122,
      pmsName = "vrm",
    } = options;

    cy.request({
      method: "POST",
      url: `${Cypress.env("apiBaseURL")}/add_custom_pricing`,
      body: {
        price,
        reason: "",
        basePrice,
        priceType: "fixed",
        pmsName,
        minStay,
        minPrice,
        minPriceType: "fixed",
        maxPrice,
        maxPriceType: "percent_max",
        listingId,
        currency: "USD",
        parentKey,
        page: 1,
        cacheBuster: Date.now(),
        syncChildren: true,
        isParentListing: true,
        hasChildren: false,
        startDate: date,
        endDate: date,
        actualStartDate: date,
        actualEndDate: date,
        leadTimeExpiry: "",
        checkInCheckOutEnabled: false,
        checkIn: "0000000",
        checkOut: "1111111",
        currentRowIndex: 0,
        snoozeDso: false,
        isPricingPage: false,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.response.success).to.eq(
        "Your custom prices have been updated.",
      );
    });
  }
  static loginwithoutSession = (options = {}) => {
    const {
      listingId,
      basePrice = "20",
      minPrice = "40",
      maxPrice = "100",
      minStay = "2",
      price = "40",
      date,
      parentKey = 2102122,
      pmsName = "vrm",
    } = options;
    let payload = {
      price,
      reason: "",
      basePrice,
      priceType: "fixed",
      pmsName,
      minStay,
      minPrice,
      minPriceType: "fixed",
      maxPrice,
      maxPriceType: "percent_max",
      listingId,
      currency: "USD",
      parentKey,
      page: 1,
      cacheBuster: Date.now(),
      syncChildren: true,
      isParentListing: true,
      hasChildren: false,
      startDate: date,
      endDate: date,
      actualStartDate: date,
      actualEndDate: date,
      leadTimeExpiry: "",
      checkInCheckOutEnabled: false,
      checkIn: "0000000",
      checkOut: "1111111",
      currentRowIndex: 0,
      snoozeDso: false,
      isPricingPage: false,
    };
    cy.api({
      method: "POST",
      url: `${Cypress.env("apiBaseURL")}/add_custom_pricing`,
      failOnStatusCode: false,
      body: payload,
    }).then((res) => {
      expect(res.body.status).to.eq(403);
      expect(res.body.response.message).to.be.eq(
        "Unauthorized Access. Please sign out and sign back in.",
      );
    });
  };
}
