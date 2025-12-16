//use Routes

/*const express = require('express'); 
const app = express(); 



const indexRoutes = require('./routes/index');
const submitRoutes = require('./routes/submit');

app.use(express.static('routes'));
app.use(express.json())
app.use('/', indexRoutes);
app.use('/submit', submitRoutes);



app.listen(3000, () => { 
   console.log('Server is running on port 3000'); 
});*/


//use EJS

/*const express = require('express'); 
const app = express(); 
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON data


const indexRoutes = require('./routes/index');
const submitRoutes = require('./routes/submit');


app.use('/', indexRoutes);
app.use('/submit', submitRoutes);



app.listen(3000, () => { 
   console.log('Server is running on port 3000'); 
});*/



//use Pug

const express = require('express');
const path = require('path');
const app = express();
// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Route that renders the page
app.get('/', (req, res) => {
  res.render('myfruit', { 
        mysurvey : 'mysurvey',
        Titlequestion :  'Titlequestion',
        Mostfavorite : 'Mostfavorite',
        Secondfavorite : 'Secondfavorite',
        Thirdfavorite : 'Thirdfavorite'
   });
});


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

