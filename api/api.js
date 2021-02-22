const express = require('express');

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const apiRouter = express.Router();

const highScoreRouter = require('./highScore.js');
apiRouter.use('/highScore', highScoreRouter);

apiRouter.get('/pg', async (req, res, next) => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table;');
    res.status(200).json(result.rows);
    pool.end();
});

module.exports = apiRouter;