var express = require('express');
var router = express.Router();
var Mongo = require('Mongodb-curd');
var bata = 'weekTest';
var list = 'list';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getData', function(req, res, next) {
    Mongo.find(bata, list, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: 'error'
            })
        } else {
            res.send({
                code: 1,
                mes: 'success',
                data: result
            })
        }
    }, {
        skip: 0,
        limit: 0
    })
});

router.get('/getMsg', function(req, res, next) {
    res.send(req.url)
        // Mongo.find(bata, list, { _id: req.query.id }, function(result) {
        //     if (!result) {
        //         res.send({
        //             code: 0,
        //             mes: 'error'
        //         })
        //     } else {
        //         res.send({
        //             code: 1,
        //             mes: 'success',
        //             data: result
        //         })
        //     }
        // }, {
        //     skip: 0,
        //     limit: 0
        // })
});

module.exports = router;