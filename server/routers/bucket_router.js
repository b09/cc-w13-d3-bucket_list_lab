const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const bucketListRouter = function(bucketCollection){

  // index
  router.get('/', (req, res) => {
    bucketCollection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });

  // show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    bucketCollection
    .findOne({_id: ObjectID(id)})
    .then((docs) => res.json(docs))
  });

  // create
  router.post('/',(req, res) => {
    const newBucketListItem = req.body.item;
    bucketCollection
    .insertOne(newBucketListItem)
    .then( () => {
      bucketCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
    });
  });

  // destroy
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    bucketCollection
    .deleteOne({_id: ObjectID(id)})
    .then( () => {
      bucketCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
    });
  });


  return router;
}

module.exports = bucketListRouter;
