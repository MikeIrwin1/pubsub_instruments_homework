const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) =>{
    const instrumentHeading = document.createElement('h2');
    instrumentHeading.textContent = event.detail.name;
    const instrumentDescription = document.createElement('p');
    instrumentDescription.textContent = event.detail.description;
    const instrumentExamplesHeading = document.createElement('h3');
    instrumentExamplesHeading.textContent = 'Example Instruments';
    const instrumentExamples = document.createElement('ul');
    this.container.innerHTML = '';

    this.container.appendChild(instrumentHeading);
    this.container.appendChild(instrumentDescription);
    this.container.appendChild(instrumentExamplesHeading);
    this.container.appendChild(instrumentExamples);
    event.detail.instruments.forEach((instrument) => {
      const eachInstrument = document.createElement('li');
      eachInstrument.textContent = instrument;
      this.container.appendChild(eachInstrument);
    });
  })
};
module.exports = ResultView;
