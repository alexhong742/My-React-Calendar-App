'use strict';
const express = require('express');
const app = express();
const request = require('request')
const path = require('path');
const mongoose = require('mongoose')
const bodyParse = require('body-parser')
const eventCtrl = require('./controller/controller.js');

mongoose.connect('mongodb://alexhong742:3edd19f7@ds151433.mlab.com:51433/alexhongcalendar')
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});
app.use(bodyParse())
app.use(express.static('build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.get('/build/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, './../build/bundle.js'))
})

app.post('/', eventCtrl.create)
app.get('/redirect', eventCtrl.getData)
app.get('/patched', eventCtrl.getData)
app.delete('/:identifier', eventCtrl.delete);
app.patch('/:identifier', eventCtrl.patch)
//let the server know where to send requests from certain routes

app.listen(3000, () => {
    console.log('now listening on 3000!');
});
