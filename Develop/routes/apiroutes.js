const apiRouter = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs, install with `npm install uuid`

// Function to read and write notes to the db.json file
const notesFilePath = path.join(__dirname, '../db/db.json');

function readNotes() {
  const notesData = fs.readFileSync(notesFilePath, 'utf-8');
  return JSON.parse(notesData);
}

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

module.exports = apiRouter;
