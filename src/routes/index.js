const express = require('express');
const recordRouter = require('./Records');

const router = express.Router();

/**
 * @desc : Route for Records
 * @route :Post  /
 */
router.use('/', recordRouter);

module.exports = router;
