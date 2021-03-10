const express = require('express');
const router = express.Router();
const developersObj = require('./backend/src/developers');

router.use(developersObj);

module.exports = router;