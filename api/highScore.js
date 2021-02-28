const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        ssl: true,
        rejectUnauthorized: false
    }
});

highScoreRouter = express.Router({ mergeParams: true });
//highScoreRouter.use(bodyParser.urlencoded({ extended: true }));
//highScoreRouter.use(bodyParser.json());

highScoreRouter.get('/', async (req, res, next) => {
    const client = await pool.connect();
    const rounds = await client.query('SELECT * FROM Toplist ORDER BY rounds ASC LIMIT 10;');
    const time = await client.query('SELECT * FROM Toplist ORDER BY time ASC LIMIT 10;');
    const result = {
        rounds: rounds.rows,
        time: time.rows
    };
    res.status(200).json(result);
    client.end();
});

highScoreRouter.post('/', async (req, res, next) => {
    const newEntry = await req.body;
    console.log(newEntry.name);

    const client = await pool.connect();
    const result = await client.query(`INSERT INTO Toplist (name, time, rounds) VALUES ( ${"'" + newEntry.name + "'"}, ${newEntry.time}, ${newEntry.score});`);
    res.status(201).send(result);
    client.end();
});

module.exports = highScoreRouter;