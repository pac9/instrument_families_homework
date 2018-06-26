const PubSub = require('../helpers/pub_sub');

const DropdownListView = function(element){
 this.element = element;

};

DropdownListView.prototype.populate = function(familyData){
   familyData.forEach((family, index) =>{
     const option = document.createElement('option');
     option.textContent = family.name;
     option.value = index;
     this.element.appendChild(option);
   });
   this.element.addEventListener('change', (evt) => {
        const selectedIndex = evt.target.value;
        PubSub.publish('DropdownListView:change', selectedIndex);
    });
 };



DropdownListView.prototype.bindEvents = function(){
     PubSub.subscribe('InstrumentFamilies:all-families-ready', (evt) =>{
       const allFamilies = evt.detail;
       this.populate(allFamilies);
     })

   };

module.exports = DropdownListView;
// SelectView.prototype.bindEvents = function(){
//   PubSub.subscribe('Animals:all-animals-ready', (evt) => {
//     const allAnimals = evt.detail;
//     this.populate(allAnimals);
//   });
