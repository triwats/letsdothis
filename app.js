const nocache = require('nocache');
const bodyParser = require('body-parser')

var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Initialise your routes here
var indexRouter = require('./routes/index');
var startlistRouter = require('./routes/startlist');
var createRouter = require('./routes/create');
var queryRouter = require('./routes/query');

var app = express();

// Disabling cachinga as it's very annoying
app.use(nocache());

// Allow for Extended URL Encoding for request body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Tell Express to define a new router here
app.use('/', indexRouter);
app.use('/startlist', startlistRouter);
app.use('/create', createRouter);
app.use('/query', queryRouter);

module.exports = app;