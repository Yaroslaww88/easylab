const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

var bodyParser = require('body-parser')

app.use(bodyParser.json());

/**
 * routers going here
 */

var login = require('./routes/login');
var register = require('./routes/register');

app.use('/api', login);
app.use('/api', register);

app.listen(port, () => {
    console.log(`Server started and working on port ${port}`);
});