const apiRouter = require('express').Router();
// Get route to display notes and open note taking page
apiRouter.get('/notes', (req, res) => {
    res.send('Hello')
  });

  module.exports = apiRouter;