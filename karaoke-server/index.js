const express  = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const CORS = require('cors');
const PORT = 8000;
const app  = express();


const songRouter = require('./routes/songRouter');

mongoose.connect('mongodb://localhost:27017/codex-project5', (err) =>{
  console.error(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(CORS());


app.use('/api/v1.0.0/songs', songRouter );

app.listen( 
  PORT, 
  () => { console.log(`App is running on port ${PORT}.`); 
});