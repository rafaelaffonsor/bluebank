
var appRouter = function(app) {

  app.get("/accounts", function(req, res) {
    var db = req.db;
    var collection = db.get('account');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });

  });

  app.post('/accounts', function (req, res) {

    var data = req.body.data;
    var value = parseInt(data.value);

    var db = req.db;
    var collection = db.get('account');

    collection.findOne({'agency': parseInt(data.fromagency), 'account': parseInt(data.fromaccount)},{},function(e,from){
        if (e) {
          res.status(202).json("Agência ou conta de origem não existente");
        }
        if (value > from.balance) {
          res.status(202).json("Não há saldo disponível para a transferência");
        } else {
          var from_value = from.balance - data.value;
          collection.update( { 'agency': parseInt(data.fromagency), 'account': parseInt(data.fromaccount) }, { $set: {'balance': from_value} } );
        }
    });

    collection.findOne({'agency': parseInt(data.toagency), 'account': parseInt(data.toaccount)},{},function(e,to){
      if (e) {
        res.status(202).json("Agência ou conta de destino não existente");
      } else {
        var to_value = to.balance + value;
        collection.update( { 'agency': parseInt(data.toagency), 'account': parseInt(data.toaccount) }, { $set: {'balance': to_value} } );
      }
    });

    // res.status(200).json("ok");
  });

}

module.exports = appRouter;
