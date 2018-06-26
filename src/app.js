// console.log('JavaScript Loaded');
const DropdownListView = require('./views/dropdown_list_view');
const ShowInstrumentDetailsView = require('./views/show_instrument_details_view');
const InstrumentFamilies = require('./models/instrument_families');


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('#instrument-families');

  const familyDropdown = new DropdownListView(selectElement);
    // console.log(selectElement);
  familyDropdown.bindEvents();


  const info = document.querySelector('#info')
  const infoDisplay = new ShowInstrumentDetailsView(info);
  infoDisplay.bindEvents();

  const familyDataSource = new InstrumentFamilies();
  familyDataSource.bindEvents();
});
