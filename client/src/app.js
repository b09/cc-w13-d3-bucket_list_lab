const BucketFormView = require('./views/bucket_form_view.js');

document.addEventListener('DOMContentLoaded', () =>{
  // console.log('Hello World!');
  const bucketFormElement = document.querySelector('#bucket-form');
  const bucketFormView = new BucketFormView(bucketFormElement);
  bucketFormView.bindEvents();
});
