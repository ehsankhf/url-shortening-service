const logger = require('morgan');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname,'..','public')));
};
