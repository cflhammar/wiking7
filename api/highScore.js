const express = require('express');
const { Pool } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

let highScore = [{ name: 'backend', score: 10 }, { name: 'backend', score: 20 }]
//let test;

let highScoreRouter = express.Router({ mergeParams: true });
//highScoreRouter.use(bodyParser.urlencoded({ extended: true }));
//highScoreRouter.use(bodyParser.json());

const sort = () => {
    highScore = highScore.sort(function (a, b) {
        var x = a.score; var y = b.score;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

const adjustLength = () => {
    const length = highScore.length;
    if (length > 10) {
        highScore = highScore.slice(0, 10)
    }
}

highScoreRouter.get('/', (req, res, next) => {
    console.log("getting")
    res.send(highScore);
});

highScoreRouter.get('/test', (req, res, next) => {
    client.query('SELECT * FROM test_table;', (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log(res.json())
        }
    })
    res.send(highScore);
});

highScoreRouter.post('/', (req, res, next) => {
    const newEntry = req.body;
    console.log(newEntry);
    highScore.push(newEntry);
    sort();
    adjustLength();
    res.status(201).send(highScore);
});

module.exports = highScoreRouter;