var express = require('express');
// const res = require('express/lib/response');
var router = express.Router();
// var mongo=require('mongodb');
//import mongo from mongodb

var getMongoCon=require('./shared')


router.post('/reg',function(req,res,next){
  //receive the req
  //take the data from req
  //if it is huge data use body parameters
  var uid=req.body.uid;
  var pwd=req.body.pwd;
  var phone=req.body.phone;
  var email=req.body.email;
  //var data={uid:uid,pwd:pwd,phone:phone,email:email}
  var data={uid,pwd,phone,email}

  //connect with db

  getMongoCon(res,function(db){
     var collection=db.collection('users')
      //perform some operation
     collection.insertOne(data,function(e,s){
        //prepare/send res back to client
        if(e){
          res.send(e)
        }else{
          res.send(s)
        }
        
     })
    
  })

 
 

})
router.post('/login/:uid',function(req,res,next){
var u =req.params.uid;
var p =req.query.pwd;
getMongoCon(res,function(db){
  var collection=db.collection('users');
  collection.find({uid:u,pwd:p}).toArray(function(e,s){
      if(e){
        res.send(e)
      }else{
        res.send(s)
      }
  })

})
  
})

router.post('/check-uid/:uid',function(req,res,next){
  var u =req.params.uid;
  
  getMongoCon(res,function(db){
    var collection=db.collection('users');
    collection.find({uid:u}).toArray(function(e,s){
        if(e){
          res.send(e)
        }else{
          console.log(s.length)
          res.send(s.length.toString())
        }
    })
  
  })
    
  })

module.exports = router;
