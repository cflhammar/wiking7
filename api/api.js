const express = require('express');

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


const apiRouter = express.Router();
apiRouter.get('/', (req, res, next) => {
    res.status(200).json({ hejsan: 'hejsan' })
});

const highScoreRouter = require('./highScore.js');
apiRouter.use('/highScore', highScoreRouter);

apiRouter.get('/pg', async (req, res, next) => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table;');
    res.status(200).json(result.rows);
});


module.exports = apiRouter;