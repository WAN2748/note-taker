const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.post('/api/notes', (req, res) => {

  const newNotes= req.body;

  newNotesrouteName = newNotesname.replace(/\s+/g, '').toLowerCase();
  console.log(newNotes);

  Notes.push(newNotes);
  res.json(newNotes);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
