use bucketList;
db.dropDatabase();

db.bucketListItems.insertMany([
  {
    country: 'Spain'
  },
  {
    country: 'Portugal'
  },
  {
    country: 'Panama'
  }
]);
