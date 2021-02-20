const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.status(200).json({ hejsan: 'hejsan' })
});

const highScoreRouter = require('./highScore.js');
apiRouter.use('/highScore', highScoreRouter);


module.exports = apiRouter;