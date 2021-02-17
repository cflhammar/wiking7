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
app.use(express.static('react-ui/build'));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets


    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.use(express.static('client/build'));
}

app.use('/api', apiRouter);
app.get('/apa', (req, res, next) => {
    console.log("apa")
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server started, listening on: ' + PORT);
})