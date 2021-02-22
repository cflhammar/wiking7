const express = require('express');

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const client = pool.connect();

const apiRouter = express.Router();
apiRouter.get('/', (req, res, next) => {
    res.status(200).json({ hejsan: 'hejsan' })
});

const highScoreRouter = require('./highScore.js');
apiRouter.use('/highScore', highScoreRouter);

apiRouter.get('/pg', async (req, res, next) => {
    client.query('SELECT * FROM test_table', (err, result) => {
        res.status(200).json(result);
    });

})


module.exports = apiRouter;