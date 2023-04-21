const notesRouter = require('express').Router();
const path = require('path');
// Get route to display notes and open note taking page
notesRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = notesRouter;