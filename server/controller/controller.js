const mongoose = require('mongoose');
const Event = require('./../model/model.js')
const cheerio = require('cheerio');
const request = require('request');

let eventController = {
    create: (req,res) => {
        console.log(req.body, 'this is the body!!')
        let today = Event({ 
            'summary' : req.body.summary,
            'created' : req.body.created,
            'creat' : req.body.creat,
        }); 
        Event.create(today,function(err,today){
        if (err) throw err;
        console.log('today saved');
        // res.redirect("/calendar")
        res.send(today)
        })
    },
    getData: (req,res) => {
        Event.find({}, (err, data) => {
            res.send(data)
        });
    },
    // getData: (req, res) => {
    //     // change URL to any site that you want
    //     request('/', (error, response, html) => {
    //       let $ = cheerio.load(html);
    //       // res.setHeader('Content-Type', 'json');
    //       let scrappedObj = [];
    //       $('ul').map(function(i, elem) {
    //         scrappedObj.push($(this).text());
    //       });
    //       // console.log(scrappedObj);
    //       res.json(scrappedObj);
    //       if (error) {
    //         response.send('error');
    //       }
    // });
    // },
    //   getPata: (req, res, next) => {
    //     // change URL to any site that you want
    //     request('https://www.ebay.com/', (error, response, html) => {
    //       if (error) {
    //         response.send('error');
    //       }
    //       let $ = cheerio.load(html);
    //       // console.log(next());
    //       let scrappedObj = [];
    //       $('a[href*="ebay.com"]').map(function(i, elem) {
    //         scrappedObj.push($(elem).attr('href'));
    //       });
    //       console.log(scrappedObj)
    //       request(scrappedObj[4], (error, response, html) => {
    //         let $ = cheerio.load(html);
    //         $('a[href*="ebay.com"]').map(function(i, elem) {
    //           scrappedObj.push($(elem).attr('href'));
    //         });
    //         return res.json(scrappedObj);
    //       })
    //       // res.json(scrappedObj);
    //     });
    //   }
}

module.exports = eventController