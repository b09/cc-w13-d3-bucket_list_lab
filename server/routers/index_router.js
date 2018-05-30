const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bucketListRouter = require('./bucket_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
  const db = client.db('bucketList');
  const bucketListItemsCollection = db.collection('bucketListItems');

  router.use('/api/bucketlist', bucketListRouter(bucketListItemsCollection));
});

module.exports = router;
