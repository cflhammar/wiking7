const express = require('express');


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

highScoreRouter.post('/', (req, res, next) => {
    const newEntry = req.body;
    console.log(newEntry);
    highScore.push(newEntry);
    sort();
    adjustLength();
    res.status(201).send(highScore);
});

module.exports = highScoreRouter;