const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);
    console.log(allInstruments);
  })

  this.container.addEventListener('select', (event) => {
    const selectedInstrument = event.details;
    console.log(selectedInstrument);
  })
};

SelectView.prototype.populate = function (allInstruments) {
  allInstruments.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = instrument.name;
    this.container.appendChild(option);
  })
};
module.exports = SelectView;
