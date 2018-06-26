const PubSub = require('../helpers/pub_sub');

const ShowInstrumentDetailsView = function(container){
   this.container  = container;
};

ShowInstrumentDetailsView.prototype.show = function(family){
  const details = document.createElement('p');
  details.textContent = `${family.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(details);

};

ShowInstrumentDetailsView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const family = evt.detail;
    this.show(family);
  })

}

module.exports = ShowInstrumentDetailsView;
