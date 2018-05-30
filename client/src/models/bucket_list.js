const Request = require("../helpers/request.js");
const PubSub = require('../helpers/pubsub.js');

const BucketList = function(url) {
  this.url = url;
};

// bind events method
BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('BucketItemView:item-delete-clicked', (evt) => {
    this.deleteBucketItem(evt.detail);
  });
  PubSub.subscribe('BucketItemView:item-submitted', (evt) => {
    this.postBucketItem(evt.detail);
  });
};

// get data method
BucketList.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((bucketItems) => {
      PubSub.publish('BucketListItems:data-loaded', bucketItems);
    })
    .catch(console.error);
};

// submit/post method
BucketList.prototype.postBucketItem = function (bucketItem) {
  const request = new Request(this.url);
  request.post(bucketItem)
    .then((bucketItems) => {
      PubSub.publish('BucketListItems:data-loaded', bucketItem);
    })
    .catch(console.error);
};

// delete BucketList item method
BucketList.prototype.deleteBucketItem = function (bucketItemID) {
  const request = new Request(this.url);
  request.delete(bucketItemID)
    .then((bucketItems) => {
      PubSub.publish('BucketListItems:data-loaded', bucketItem);
    })
    .catch(console.error);
};

module.exports = BucketList;
