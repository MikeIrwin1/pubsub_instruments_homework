const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);
  });

  this.container.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:selected-instrument', selectedIndex);
  });
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
