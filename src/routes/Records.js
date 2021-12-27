const express = require('express');
const recordController = require('../controllers/Records');
const schemas = require('../validations/Records');
const validate = require('../middlewares/validate');

const router = express.Router();

/**
 * @route   POST /records
 * @desc    Route for get filtered records data with validation
 * @access  Public
 */
router
  .route('/records')
  .post(validate(schemas.getRecords, 'body'), recordController.getRecords);

module.exports = router;
