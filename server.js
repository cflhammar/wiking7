const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./api.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(errorhandler());
app.use(morgan('dev'));
app.use(express.static('build'));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server started, listening on: ' + PORT);
})

module.exports = app;