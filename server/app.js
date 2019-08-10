process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const viewConfig = require('./config/view');
const errorConfig = require('./config/error');
const utilitiesConfig = require('./config/utilities');
const routesConfig = require('./config/routes');
const mongo = require('./common/mongo');

const express = require('express');

const app = express();

mongo.connect();

viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
