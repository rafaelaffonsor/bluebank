
var mongodb = require('mongodb');

exports.up = function(db, next){
    var collection = db.collection('account');
    collection.insert({'agency': 1234, 'account': 5678, 'balance': 500}, next);
    collection.insert({'agency': 4321, 'account': 31231, 'balance': 1500}, next);
    collection.insert({'agency': 534534, 'account': 6456, 'balance': 7500}, next);
    collection.insert({'agency': 32412, 'account': 2423, 'balance': 100}, next);
    collection.insert({'agency': 5345, 'account': 7888, 'balance': 4000}, next);
};

exports.down = function(db, next){
    var collection = db.collection('account');
    collection.remove({});
};
