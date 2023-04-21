const express = require('express');

// Import our modular routers for /apiroutes and /htmlroutes
const apiRouter = require('./apiroutes');
const htmlRouter = require('./notesroutes');

const app = express();

app.use('/api', apiRouter); // Use the apiRouter for /api routes
app.use('/', htmlRouter); // Use the htmlRouter for /notes route

module.exports = app;
