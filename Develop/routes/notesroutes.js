// Import the express module and the path module
const express = require('express');
const path = require('path');

// Create a new instance of an Express router
const router = express.Router();

// Define a GET route to serve the notes page
router.get('/notes', (req, res) => {
  const notesPath = path.join(__dirname, '../public/notes.html');
  res.sendFile(notesPath);
});

// Export the router for use in other files
module.exports = router;
