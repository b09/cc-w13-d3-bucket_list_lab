const PubSub = require('../helpers/pubsub.js');

const BucketFormView = function (htmlElement){
  this.htmlElement = htmlElement;
};

BucketFormView.prototype.bindEvents = function () {
  this.htmlElement.addEventListener('submit', (evt) => {
    // console.log(evt.target.value);
    evt.preventDefault();
    const newItem = this.createItem(evt.target);
    PubSub.publish('BucketFormView:bucket-item-submitted', newItem)
    evt.target.reset();
  });

};

BucketFormView.prototype.createItem = function (form) {
  const newBucketListItem = {
  item: {
    country: form.country.value
    }
  };
  return newBucketListItem;
};

module.exports = BucketFormView;
