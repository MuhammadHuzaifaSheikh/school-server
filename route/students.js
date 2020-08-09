const express = require('express');
const api = express.Router();
require('../mangoose/connection');
var schema = require('.././mangoose/schema');

var data;




api.post('/add', function (req, res) {
    console.log(req.body);
    data= req.body
    var u = new schema.UserModel(data);
    u.save(function (error,data) {
        console.log(error,data)
        res.send({error, data,message:'successfully saved'});

    })
    console.log(data);
})


api.post('/fillteryear', function (req, res) {
    console.log(req.body);
    schema.UserModel.where({year:req.body.year}).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});
api.post('/fillterclass', function (req, res) {
    console.log(req.body);
    schema.UserModel.where({currentClass:req.body.classes}).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});
api.post('/fillterkeyword', function (req, res) {
    console.log(req.body);
    var regexQuery = {
        $or: [
            {cnic: new RegExp(req.body.keyword, 'i')},
            {phone: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},
            {fatherName: new RegExp(req.body.keyword, 'i')},
            {name: new RegExp(req.body.keyword, 'i')},
            {lastInstitution: new RegExp(req.body.keyword, 'i')},
            {currentClass: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},        ],

    };

    schema.UserModel.where(regexQuery).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});

api.post('/fillteryearclass', function (req, res) {
    console.log(req.body);
    schema.UserModel.where({currentClass:req.body.classes,year:req.body.year}).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});

api.post('/fillteryearkeyword', function (req, res) {
    console.log(req.body);
    var regexQuery = {
        $or: [
            {cnic: new RegExp(req.body.keyword, 'i')},
            {phone: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},
            {fatherName: new RegExp(req.body.keyword, 'i')},
            {name: new RegExp(req.body.keyword, 'i')},
            {lastInstitution: new RegExp(req.body.keyword, 'i')},
            {currentClass: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},        ],
        year:req.body.year
    };

    schema.UserModel.where(regexQuery).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});


api.post('/fillterclasskeyword', function (req, res) {
    console.log(req.body);
    var regexQuery = {
        $or: [
            {cnic: new RegExp(req.body.keyword, 'i')},
            {phone: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},
            {fatherName: new RegExp(req.body.keyword, 'i')},
            {name: new RegExp(req.body.keyword, 'i')},
            {lastInstitution: new RegExp(req.body.keyword, 'i')},
            {currentClass: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},
        ],
        currentClass:req.body.classes
    };

    schema.UserModel.where(regexQuery).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});


api.post('/fillteryearclasskeyword', function (req, res) {
    console.log(req.body);
    var regexQuery = {
        $or: [
            {cnic: new RegExp(req.body.keyword, 'i')},
            {phone: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},
            {fatherName: new RegExp(req.body.keyword, 'i')},
            {name: new RegExp(req.body.keyword, 'i')},
            {lastInstitution: new RegExp(req.body.keyword, 'i')},
            {currentClass: new RegExp(req.body.keyword, 'i')},
            {address: new RegExp(req.body.keyword, 'i')},
        ],
        currentClass:req.body.classes,
        year:req.body.year,
    };

    schema.UserModel.where(regexQuery).find(regexQuery).exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});



api.post('/studentDetail', function (req, res) {
    console.log(req.body);
    schema.UserModel.where({_id:req.body.id}).find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});

api.post('/updateData', function (req, res) {
    console.log(req.body);
    schema.UserModel.where({_id:req.body.studentId}).updateMany(req.body).exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});


api.get('/get', function (req, res) {
    schema.UserModel.find().exec(function (error,data) {
        // console.log(error,data)
        res.send({data,error})
    })
});
module.exports= api
