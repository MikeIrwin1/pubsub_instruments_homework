const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');
const instrumentData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectContainer = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectContainer);
  instrumentDropdown.bindEvents();

  const instruments = new InstrumentFamilies(instrumentData);
  instruments.bindEvents();
});
