import tesData from "../../fixtures/multiCalender.json";
export default {
  notaddingToast:
    "You need to set at least one custom pricing setting before you add.",
  changeOnbaseOption: "% change on base price",
  warningModalTitleText: "Confirm Date-specific Override",
  warningText: (customPrice, minPrice, propertyName) => {
    return `You are setting a fixed price at ${customPrice} which is below the minimum for all 1 listings. This will override the highest minimum of ${3204} for ${propertyName}.
`;
  },
  fixedPriceValidation: "Fixed custom pricing should be greater than 10",
  notSelectingDay:
    "At least one day of the week should be enabled for check-in.",
};
