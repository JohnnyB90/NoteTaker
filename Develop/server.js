// Import the express module and the routes modules
const express = require('express');
const htmlRoutes = require('./routes/notesroutes');
const apiRoutes = require('./routes/apiroutes');

// Create a new instance of an Express application
const app = express();

// Set the application to listen on either the specified port or port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Use the htmlRoutes router for requests to the root route
app.use('/', htmlRoutes);

// Use the apiRoutes router for requests to the /api route
app.use('/api', apiRoutes);



// Enables parsing of bodies coming through or when adding new notes in this case
app.use(express.json());
//
app.use(express.urlencoded({ extended: true }));
// Allows express to access and use the files in the public folder such as index.js, index.html, css files etc.
app.use(express.static('public'));
// Gives access to the api routes using the path /api
app.use('/api', apiRoutes);
// Gives access to the homepage using htmlRoutes
app.use('/', htmlRoutes);
// When successfully listening, console log the message below
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
