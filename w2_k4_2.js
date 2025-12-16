const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs'); // Set EJS as view engine
app.get('/', (req, res) => {
  const myName = 'Sweet Teacher';
  const myWebsite = 'Node.js Learning Hub';
  // Send variables to EJS
  res.render('index', { name: myName, website: myWebsite });
});
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
