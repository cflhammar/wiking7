const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
// const { Pool } = require('pg');

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        ssl: true,
        rejectUnauthorized: false
    }
});
const client = pool.connect();

// let highScore = [{ name: 'backend', score: 10 }, { name: 'backend', score: 20 }]
//let test;

highScoreRouter = express.Router({ mergeParams: true });
//highScoreRouter.use(bodyParser.urlencoded({ extended: true }));
//highScoreRouter.use(bodyParser.json());

// const sort = () => {
//     highScore = highScore.sort(function (a, b) {
//         var x = a.score; var y = b.score;
//         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//     });
// }

// const adjustLength = () => {
//     const length = highScore.length;
//     if (length > 10) {
//         highScore = highScore.slice(0, 10)
//     }
// }

highScoreRouter.get('/', async (req, res, next) => {
    const result = await client.query('SELECT * FROM Toplist;');
    res.status(200).json(result.rows);
});

// highScoreRouter.get('/test', (req, res, next) => {
//     client.query('SELECT * FROM test_table;', (err, res) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log(res.json())
//         }
//     })
//     res.send(highScore);
// // });

// highScoreRouter.post('/', (req, res, next) => {
//     const newEntry = req.body;
//     console.log(newEntry);
//     highScore.push(newEntry);
//     sort();
//     adjustLength();
//     res.status(201).send(highScore);
// });

module.exports = highScoreRouter;