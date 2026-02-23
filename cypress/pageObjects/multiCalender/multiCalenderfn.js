/// <reference types="cypress" />
import Click from "../../utils/Interactions/click";
import Verify from "../../utils/Interactions/assertions";
import multiCalenderConstants from "../../utils/constantMessages/multiCalender";
import HelperFunctions from "../../utils/helpers/helperfunctions";
import commonSelec from "../../utils/selectors/commonSelec";
import Type from "../../utils/Interactions/Type";
import restActions from "../../utils/Interactions/anotherActions";
import multicalenderPage from "../../utils/selectors/multicalenderPage";
import testData from "../../fixtures/multiCalender.json";
const {
  notaddingToast,
  changeOnbaseOption,
  warningModalTitleText,
  fixedPriceValidation,
  notSelectingDay,
  warningText,
} = multiCalenderConstants;
const {
  addbtn,
  searchLoc,
  selectMinPrice,
  editDSOPrice,
  formattedDateSelector,
  editMinPrice,
  editMaxPrice,
  warningModalTitle,
  extractMinPrice,
  minfilterToApply,
} = multicalenderPage;
let minPrice;
export default class multicalendarfns {
  static addDSO = (searchID, startdate, enddate, overridePrice, properName) => {
    Verify.theElement(addbtn).isEnabled();
    Click.on(addbtn);
    HelperFunctions.errToastValidation(commonSelec.toastBox, notaddingToast);
    Type.theText(overridePrice).into(editDSOPrice);
    restActions.selectOptions(selectMinPrice, changeOnbaseOption);
    Type.theText(overridePrice).into(editMinPrice);
    Type.theText(overridePrice).into(editMaxPrice);
    this.DateVerificationOnDSO(startdate, enddate);
    Click.on(addbtn);
    Verify.theElement(warningModalTitle).contains(warningModalTitleText);
    // this.extractingBasePrice(extractMinPrice(searchID)).then((minPrice) => {
    //   const base = Number(minPrice);
    //   const expectedText = warningText(overridePrice, base, properName);
    //   cy.get('div[id^="chakra-modal--body"] p.chakra-text')
    //     .invoke("text")
    //     .then((text) => {
    //       expect(text).to.match(
    //         new RegExp(`You are setting a fixed price at\\s*${overridePrice}`),
    //       );

    //       expect(text).to.match(/below the minimum for all 1 listings/);

    //       expect(text).to.match(/highest minimum of \d+/);

    //       expect(text).to.match(new RegExp(properName));
    //     });

    // });
    Click.containJustText("Update");
    cy.get(`span[qa-id*="mc-dso-band-${searchID}"]`).should("be.visible");
  };
  static validationOnUnderFixedPrice = (overridePrice) => {
    Verify.theElement(addbtn).isEnabled();
    Click.on(addbtn);
    Type.theText(overridePrice).into(editDSOPrice);
    HelperFunctions.errToastValidation(commonSelec.toastBox, notaddingToast);
  };
  static extractingBasePrice = (filter) => {
    return cy
      .get(filter)
      .invoke("val")
      .then((value) => {
        minPrice = value;
        console.log(minPrice);
        return minPrice;
      });
  };
  static dateToOverridefn = (searchID, date) => {
    HelperFunctions.search(searchID);
    const formatted = HelperFunctions.formattingDate(date);
    cy.get(`[qa-id="calendar-header-${formatted}"]`)
      .closest("th")
      .invoke("index")
      .then((colIndex) => {
        cy.get('tbody tr[data-index="0"]')
          .find("td")
          .eq(colIndex + 2)
          .realClick();
      });
  };
  static multipledateToOverridefn = (start, end) => {
    const startDate = HelperFunctions.formattingDate(start);
    const endDate = HelperFunctions.formattingDate(end);

    // Get column index from header
    cy.get(`[qa-id="calendar-header-${startDate}"]`)
      .closest("th")
      .invoke("index")
      .then((startIndex) => {
        cy.get(`[qa-id="calendar-header-${endDate}"]`)
          .closest("th")
          .invoke("index")
          .then((endIndex) => {
            cy.get('tbody tr[data-index="0"]').as("row");
            cy.get("@row")
              .find("td")
              .eq(startIndex)
              .realMouseDown({ position: "center" });

            cy.get("@row")
              .find("td")
              .eq(endIndex)
              .realMouseMove(0, 0, { duration: 400 })
              .realMouseUp();
          });
      });
  };
  static selectedDateValidation = (date) => {
    //Mar 06, ‘26
    const d = new Date(date);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = String(d.getDate()).padStart(2, "0");
    const month = months[d.getMonth()]; //from arr
    const year = String(d.getFullYear()).slice(-2); //removing starting 2 nums
    return `${month} ${day}, ‘${year}`;
  };
  static DateVerificationOnDSO = (startDate, endDate) => {
    let calenderStartDate = this.selectedDateValidation(startDate);
    let calenderEndDate = this.selectedDateValidation(endDate);
    cy.get('div[qa-id="date-picker-calendar-start"]').contains(
      calenderStartDate,
    );
    cy.get('div[qa-id="date-picker-calendar-end"]').contains(calenderEndDate);
  };
  static deletingExistingOverride = (searchID, date) => {
    const formatted = HelperFunctions.formattingDate(date);
    cy.get(`[qa-id="calendar-header-${formatted}"]`)
      .closest("th")
      .invoke("index")
      .then((colIndex) => {
        cy.get('tbody tr[data-index="0"]')
          .find("td")
          .eq(colIndex + 1)
          .within(() => {
            Verify.theElement(
              `span[qa-id*="mc-dso-band-${searchID}"]`,
            ).exists();
            Verify.theElement(
              `span[qa-id*="mc-dso-band-${searchID}"]`,
            ).isVisible();
            Click.realOnClick(`span[qa-id*="mc-dso-band-${searchID}"]`);
            cy.get('section[role="dialog"]')
              .should("be.visible")
              .within(() => {
                cy.get('[qa-id="remove-dso"]').should("be.visible").realClick();
              });
            Verify.theElement(
              `span[qa-id*="mc-dso-band-${searchID}"]`,
            ).isNotExist();
          });
      });
  };
  static updatingPriceValues = (fixed, min, max, date, searchID) => {
    Type.theText(fixed).into(editDSOPrice);
    Type.theText(min).into(editMinPrice);
    Type.theText(max).into(editMaxPrice);
    cy.get('button[qa-id="update-dso"]').click();
    cy.get('button[qa-id="dso-override-confirmation-update-button"]').click();
  };
  static verifyinInlineDSO = (searchID, date) => {
    Verify.theElement(`span[qa-id*="mc-dso-band-${searchID}"]`)
      .exists()
      .and("be.visible");

    const formatted = HelperFunctions.formattingDate(date);
    cy.get(`[qa-id="calendar-header-${formatted}"]`)
      .closest("th")
      .invoke("index")
      .then((colIndex) => {
        cy.get('tbody tr[data-index="0"]')
          .find("td")
          .eq(colIndex + 1)
          .within(() => {
            Verify.theElement(
              `span[qa-id*="mc-dso-band-${searchID}"]`,
            ).exists();
            Verify.theElement(
              `span[qa-id*="mc-dso-band-${searchID}"]`,
            ).isVisible();
            Click.realOnClick(`span[qa-id*="mc-dso-band-${searchID}"]`);
          });
      });
  };
  static verifyingValuesOnDSO = (fixed, min, max) => {
    cy.get(editDSOPrice).should("contain.value", fixed);
    cy.get(editMinPrice).should("contain.value", min);
    cy.get(editMaxPrice).should("contain.value", max);
    cy.get('button[qa-id="dso-modal-close-button"]').click();
  };
  static notSelectingDayForMinStay = () => {
    Type.theText(30).into(editDSOPrice);
    restActions.selectOptions(
      'select[qa-id="check-in-check-out-enabled"]',
      "Change",
    );
    Click.on(addbtn);
    HelperFunctions.errToastValidation(commonSelec.toastBox, notSelectingDay);
  };
}
