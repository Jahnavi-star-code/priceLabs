export default {
  optdropdown: (sel) => `button[qa-id="filter-dropdown-opt-${sel}"]`,
  searchPoint: 'input[qa-id="multi-select-search"]',
  clearSearch: (sel) => `span[qa-id="${sel}"]`,
  addFilter: 'div[qa-id="listing-filter-add-filter"]',
  clickingOnlist: 'button[qa-id="listing-filter-select-dropdown"]',
  quickFilterbtn: 'button[qa-id="filter-listings-button"]',
  selectDropdown: '[qa-id="listing-filter-select-dropdown"]',
  filterdropdownbasedOnName: (filterName) =>
    `div[qa-id="filter-dropdown-${filterName}"]`,
  dataChecked: "span[data-checked]",
  applyFilters: 'button[qa-id="mc-listing-filter-show-listings"]',
  saveAsQuickFilter: 'button[qa-id="mc-save-quick-filter-popover-button"]',
  filterClosebtn: 'button[qa-id="listing-filters-drawer-close-btn"]',
  filterMenubtn: 'button[qa-id="qf-quick-filters-menu-button"]',
  savedFilterBasedOnName: (filterName) =>
    `p[id="quick-filters-saved-filters-list-${filterName}"]`,
  deleteFilterBtn:
    'button[qa-id="multicalendar-delete-filters-modal-delete-btn"]',
  subsavequickFiler: 'button[qa-id="multicalendar-save-quick-filter-btn',
  SyncOn: 'div[qa-id="qf-listing-sync-on-button"]',
  notesbtn: (sele) => `button[qa-id="listing-notes-${sele}"]`,
  noteSavetn: 'button[qa-id="add-note-save-btn"]',
};
