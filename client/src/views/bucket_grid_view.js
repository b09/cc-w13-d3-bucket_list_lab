const PubSub = require("../helpers/pubsub.js");
const BucketItemView = require('./bucket_item_view.js');
const BucketItemGridView = function(htmlDiv){
  this.htmlDiv = htmlDiv;
};

// bindEvents
BucketItemGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketListItems:data-loaded', (evt) => {
    // waiting to describe render, depends on bucket iten view being defined
    this.render(evt.detail);
  });
};

BucketItemGridView.prototype.render = function (bucketItems) {
  this.htmlDiv.innerHTML = '';
  bucketItems.forEach( (bucketItem) => {
    const container = this.createChildHtml();
    const newItem = new BucketItemView(container, bucketItem);
    newItem.render();
  });
};

BucketItemGridView.prototype.createChildHtml = function () {
  const container = document.createElement('div');
  container.setAttribute('id', 'bucket-item');
  this.htmlDiv.appendChild(container);
  return container;
};

module.exports = BucketItemGridView;
