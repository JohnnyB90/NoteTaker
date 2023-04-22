// Import express methods
const express = require('express');

// Import our modular routers for /apiroutes and /htmlroutes
const apiRouter = require('./apiroutes');
const htmlRouter = require('./notesroutes');

const app = express();
// Use the apiRouter for /api routes using a new path of /api
app.use('/api', apiRouter);
// Use the htmlRouter for /notes route using a new path of /
app.use('/', htmlRouter); 
// Export the file for uses elsewhere
module.exports = app;
