// routes that have anything to do with fetching or updating adding profiles

// handle registering users adding users

const express = require('express')
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Profile Route'))

module.exports = router;