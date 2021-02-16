const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/api', (req, res, next) => {
    return <h1>Hejsan!</h1>
});


module.exports = apiRouter;