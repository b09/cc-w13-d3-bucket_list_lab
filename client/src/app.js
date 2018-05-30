const BucketFormView = require('./views/bucket_form_view.js');
const BucketGridView = require('./views/bucket_grid_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => { 
  // console.log('Hello World!');

  const bucketFormElement = document.querySelector('#bucket-form');
  const bucketFormView = new BucketFormView(bucketFormElement);
  bucketFormView.bindEvents();

  const bucketItemContainer = document.querySelector('#grid-view');
  const bucketGridView = new BucketGridView(bucketItemContainer);
  bucketGridView.bindEvents();

  //MODEL
  const bucketListModel = new BucketList('http://localhost:3000/api/bucketlist');
  bucketListModel.getData();
  bucketListModel.bindEvents();

});
