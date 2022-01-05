var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/my-test', function(req, res, next) {
  res.send("hello dhoni")
});

router.get('/query',function(req,res,next){
  //take the data from req
  var n=req.query.n;
  var l=req.query.l;
  res.send(`Hello this is ${n} Iam from ${l}`)
})

router.get('/path-params/:name/:loc',function(req,res,next){
  var name=req.params.name;
  var loc=req.params.loc;
  res.send(`Hello this is ${name} Iam from ${loc}`)
})

router.get('/my-headers',function(req,res,next){
  var name=req.headers.name;
  var loc=req.headers.loc;
  res.send(`Hello this is ${name} Iam from ${loc}`)
})

router.post('/my-req-body',function(req,res,next){
  var name=req.body.name;
  var loc=req.body.loc;
  res.send(`Hello this is ${name} Iam from ${loc}`)
})


module.exports = router;
