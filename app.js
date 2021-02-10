const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Listening on port 3000'));


//console.log(data) 
const indexRote = require('./routes/index.js');
app.use('/', indexRote);
const animalsRoute = require('./routes/animals.js');
app.use('/animals', animalsRoute);

