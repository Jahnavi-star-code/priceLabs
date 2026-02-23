import Click from "../../utils/Interactions/click";
import filterSelectors from "../../utils/selectors/filterSelectors";
import commonSelec from "../../utils/selectors/commonSelec";
import filterMsgs from "../../utils/constantMessages/filterMsgs";
import HelperFunctions from "../../utils/helpers/helperfunctions";
const {
  optdropdown,
  searchPoint,
  clearSearch,
  addFilter,
  clickingOnlist,
  quickFilterbtn,
  selectDropdown,
  filterdropdownbasedOnName,
  dataChecked,
  saveAsQuickFilter,
  deleteFilterBtn,
  filterMenubtn,
  filterClosebtn,
  savedFilterBasedOnName,
  subsavequickFiler,
  SyncOn,
  notesbtn,
  noteSavetn,
} = filterSelectors;
export default class filterfn {
  static quickFilter = () => {
    Click.realOnClick(quickFilterbtn);
  };
  static mainFilter = (
    propertyName,
    parentFilter,
    filterDropdown,
    firstfilter = false,
  ) => {
    if (firstfilter) Click.on(addFilter);
    cy.get(selectDropdown).filter(':contains("Select")').last().click();
    Click.on(optdropdown(parentFilter));
    cy.contains("p", propertyName).parent().click();
    cy.contains("p", propertyName).parent().find(dataChecked).should("exist");
    Click.realOnClick(filterdropdownbasedOnName(filterDropdown));
  };
  static childFilter = (propertyName, filterDropdown) => {
    Click.realOnClick(filterdropdownbasedOnName(filterDropdown));
    cy.contains("p", propertyName).parent().click();
    cy.contains("p", propertyName).parent().find(dataChecked).should("exist");
  };

  static savingAsQuickFilter = (propertyName, parentFilter, filterDropdown) => {
    this.quickFilter();
    this.mainFilter(propertyName, parentFilter, filterDropdown);
    Click.on(saveAsQuickFilter);
    cy.get('input[qa-id="select-dropdown-edit-filter-input"]').type(
      filterMsgs.filterName,
    );
    Click.on(subsavequickFiler);
    //Filter Saved. You can use or edit them under Quick Filters.
    cy.contains(
      /Filter Saved\. You can use or edit them under Quick Filters/i,
    ).should("be.visible");
    Click.realOnClick(filterClosebtn);
    cy.get(savedFilterBasedOnName(filterMsgs.filterName)).should("exist");
    cy.get(savedFilterBasedOnName(filterMsgs.filterName))
      .parent()
      .find("svg")
      .click();
    cy.contains("Delete").click();
    Click.on(deleteFilterBtn);
    cy.contains("Filter Deleted");
  };
  static verfyingSyncON = () => {
    cy.intercept({
      method: "GET",
      url: "**/api/listings*",
      query: {
        syncStatus: "1",
      },
    }).as("SYNCON");
    Click.realOnClick(filterMenubtn);
    Click.on(SyncOn);
    cy.wait("@SYNCON").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.query.syncStatus).to.eq("1");
    });
  };
  static verfyingSyncOFF = () => {
    cy.intercept({
      method: "GET",
      url: "**/api/listings*",
      query: {
        syncStatus: "0",
      },
    }).as("SYNCOFF");
    Click.realOnClick(filterMenubtn);
    cy.get(savedFilterBasedOnName(filterMsgs.syncoff)).should("exist");
    cy.get(savedFilterBasedOnName(filterMsgs.syncoff)).parent().click();
    cy.wait("@SYNCOFF").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.query.syncStatus).to.eq("0");
    });
  };
  static savingQuickFilterwithoutfilter = () => {
    this.quickFilter();
    cy.get(saveAsQuickFilter).should("be.disabled");
    cy.get(subsavequickFiler).should("not.be.visible");
  };
  static addingEmptyNotes = (propertyID) => {
    HelperFunctions.search(propertyID);
    Click.on(notesbtn(propertyID));
    Click.on(noteSavetn);
    cy.contains(filterMsgs.addingEmpNote);
  };
}
