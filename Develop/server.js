const express = require('express');
const htmlRoutes = require('./routes/notesroutes')
const apiRoutes = require('./routes/apiroutes')
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Get route to display notes and open note taking page
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});