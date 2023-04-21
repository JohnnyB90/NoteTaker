const express = require('express');

//Import our modular routers for /apiroutes and /htmlroutes
const apiRouter = require('./apiroutes');
const htmlRouter = require('./notesroutes');

//import diagnositcs route
const app = express();

app.use('/notes', htmlRouter);

module.exports = app;