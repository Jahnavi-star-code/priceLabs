import testData from "../../fixtures/multiCalender.json";
export default {
  searchLoc: 'input[qa-id="search-input"]',
  paginationLoc: 'p[qa-id="pagination-listing-count-text"]',
  addbtn: 'button[id="add-dso-button"]',
  editDSOPrice: 'input[qa-id="dso-price"]',
  selectMinPrice: 'select[qa-id="min-price-select"]',
  editMinPrice: 'input[qa-id="dso-min-price"]',
  editMaxPrice: 'input[qa-id="dso-max-price"]',
  warningModalTitle: 'p[qa-id="dso-warning-modal-title"]',
  extractMinPrice: (propertyID) =>
    `input[qa-id="min-price-${propertyID}___vrm"]`,
  minfilterToApply: 'label[qa-id="minPrice-checkbox"]',
  tagFilterToApply: 'label[qa-id="tags-checkbox"]',
  rowColumnFilterbtn: 'button[qa-id="pd-row-coloumn-visibility"]',
  tagsColumn: "tags",
  minPriceColumn: "minPrice",
};
