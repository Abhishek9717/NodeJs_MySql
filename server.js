const express = require('express');
const bodyParser = require('body-parser');
const peopleRoutes = require('./Routes/people');
var app = express();

app.use(bodyParser.json())

app.use('/people',peopleRoutes);

app.listen(3000);
