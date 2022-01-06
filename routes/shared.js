
var mongo=require('mongodb');


function getMongoCon(res,cb){
    // var url="mongodb://localhost:27017";
    var url ="mongodb+srv://nit:nit@cluster0.3st8d.mongodb.net/onlinetest?retryWrites=true&w=majority"
  var mongoClient=mongo.MongoClient;
  mongoClient.connect(url,function(err,server){
    if(err){
      res.send('db conn error')
    }else{
     var db= server.db('onlinetest');
     cb(db);
    }
})
}

module.exports=getMongoCon

