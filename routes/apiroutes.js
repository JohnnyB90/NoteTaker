// Creates a new instance of express router called apiRouter
const apiRouter = require('express').Router();
// Imports the ability to read and write files
const fs = require('fs');
// Imports the ability to join paths etc
const path = require('path')
// Imports uuidv4 for generating unique IDs
const { v4: uuidv4 } = require('uuid');

// Function to read and write notes to the db.json file
const notesFilePath = path.join(__dirname, '../db/db.json');

// Function using fs to read notes from db
function readNotes() {
  const notesData = fs.readFileSync(notesFilePath, 'utf-8');
  return JSON.parse(notesData);
}

// Function using fs to write new notes db
function writeNotes(notes) {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

// GET route for fetching the list of notes
apiRouter.get('/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// DELETE route for deleting notes
apiRouter.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  let notes = readNotes();
  notes = notes.filter(note => note.id !== noteId);
  writeNotes(notes);
  res.status(200).json({ message: 'Note deleted successfully.' });
});


// POST route for adding notes
apiRouter.post('/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  // Push notes into newNote and write it.
  const notes = readNotes();
  notes.push(newNote);
  writeNotes(notes);

  

  res.status(201).json(newNote);
});
// Exports this file as apiRouter
module.exports = apiRouter;
