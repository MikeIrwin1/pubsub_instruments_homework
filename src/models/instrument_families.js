const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  debugger
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data)
};

module.exports = InstrumentFamilies;
