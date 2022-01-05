var express=require('express');
var router=express.Router();
var getMongoCon=require('./shared')

router.get('/get-result/:uid',function(req,res,next){
    var uid=req.params.uid
    getMongoCon(res,function(db){
        var collection=db.collection('results');
        collection.find({name:uid}).toArray(function(e,s){
            if(e){
                res.send(e)
            }else{
                res.send(s)
            }
        })
    })

})
router.post('/save-result',function(req,res,next){
    //take data from req
    var resultObj=req.body.resultObj;
    getMongoCon(res,function(db){
        var collection=db.collection('results');
        collection.insertOne(resultObj,function(e,s){
            if(e){
                res.send(e)
            }else{
                res.send(s)
            }
        })
    })

})

module.exports=router;