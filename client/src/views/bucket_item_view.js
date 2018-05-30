const PubSub = require('../helpers/pubsub.js');

const BucketItemView = function(element, itemData) {
  // this.parentHtmlElement = parentHtmlElement;
  this.element = element;
  this.itemData = itemData
};


// BucketItemView.prototype.createOwnElement = function () {
//   const container = document.createElement('div');
//   container.setAttribute('id', 'bucket-item');
//   this.element = container;
//   this.parentHtmlElement.appendChild(this.element);
// };

BucketItemView.prototype.render = function () {
  // console.log(this.itemData);
const paragraphElement = document.createElement('p');
paragraphElement.textContent = this.itemData.country;
this.element.appendChild(paragraphElement);
const deleteButton = document.createElement('button');
deleteButton.textContent = 'delete';
this.element.appendChild(deleteButton);
// console.log(this.itemData);
deleteButton.addEventListener('click', (evt) =>{
  PubSub.publish('BucketItemView:item-delete-clicked', this.itemData._id);
})

};






module.exports = BucketItemView;
