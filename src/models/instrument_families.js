const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:selected-instrument', (event) =>{
    const selectedIndex = event.detail;
    this.publishInstrumentDetail(selectedIndex);
  })
};

InstrumentFamilies.prototype.publishInstrumentDetail = function (index) {
  const selectedInstrument = this.data[index];
  PubSub.publish('InstrumentFamilies:selected-instrument-ready', selectedInstrument);
  console.log(selectedInstrument);
};
module.exports = InstrumentFamilies;
