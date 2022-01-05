var express=require('express');
var router=express.Router();
// var mongo=require('mongodb');
var getMongoCon=require('./shared')

router.post('/insert-que1',function(req,res,next){
    
    //take data from req
    var que=req.body.queObj;
    
    //connect with db
        getMongoCon(res,function(db){

        
          var question=db.collection("questions");
          //perform some perform
          question.insertOne(que,function(e,s){
              
                //prepare and send res back to client
              if(e){
                  res.send(e)
              }else{
                  res.send(s)
              }

            })
        
   })
    
})

router.get('/get-que',function(req,res,next){
  getMongoCon(res,function(db){
    var collection=db.collection('questions')
    collection.find({}).toArray(function(e,s){
      if(e){
        res.send(e)
      }else{
        res.send(s)
      }
    })
  })
})

module.exports=router;