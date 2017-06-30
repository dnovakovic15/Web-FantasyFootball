var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
db = mongojs('mongodb://darko15:Myfavri0te21@ds143342.mlab.com:43342/fantasyfootball', ['users']);

//Get ALL Users
router.get('/', function(req, res, next){
    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    })
});

//Get Single Users
router.get('/:id', function(req, res, next){
    db.users.findOne(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    })
});

module.exports = router;