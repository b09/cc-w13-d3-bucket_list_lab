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
  console.log(this.itemData);
};

module.exports = BucketItemView;
