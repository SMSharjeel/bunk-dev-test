var createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || '3000';
const cors = require('cors');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

require('./src/routes/index')(app);

module.exports = app;