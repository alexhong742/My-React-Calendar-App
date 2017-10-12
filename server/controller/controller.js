const mongoose = require('mongoose');
const Event = require('./../model/model.js')
const cheerio = require('cheerio');
const request = require('request');

let eventController = {
    create: (req,res) => {
        console.log(req.body, 'this is the body!!')
        Event.find({created: req.body.created, creat: req.body.creat}, (err,data) => {
            console.log('this is data ', data)
            if(err){return res.send('cant rewrite your old schedule from here')}
            if(data.length){
                Event.findOneAndUpdate({created: req.body.created, creat: req.body.creat},{summary: req.body.summary},(err, student) => {
                    if(err){res.status(404)}
                    else{res.send(student)}
                })
            }
            else{
                let today = Event({ 
                    'summary' : req.body.summary,
                    'created' : req.body.created,
                    'creat' : req.body.creat,
                    'identifier' : req.body.identifier
                }); 
                Event.create(today,function(err,today){
                if (err) throw err;
                console.log('today saved');
                // res.redirect("/calendar")
                res.send(today)
                })
            }
        })
    },
    getData: (req,res) => {
        Event.find({}, (err, data) => {
            res.send(data)
        });
    },
    patch: (req,res) => {
        console.log('this is req,', req.body)
        console.log('this is reqparam,', req.params)
        Event.findOneAndUpdate({identifier: req.params.identifier},{summary: req.body.summary}, (err, student) => {
            if(err){res.status(404)}
            else{res.send(student)}
        })
    },
    delete: (req, res) => {
        // Event.deleteOne({ identifier : req.params.identifier }, (data) => console.log('this is the delete data: ', data))
        Event.remove({ identifier : req.params.identifier }, (data) => console.log('this is the delete data: ', data))        
    },
}

module.exports = eventController