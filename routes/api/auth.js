// handle getting json webtoken for authrentifications

// handle registering users adding users

const express = require('express')
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Auth Route'))

module.exports = router;