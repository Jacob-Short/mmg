// handleing all the posts 

// handle registering users adding users

const express = require('express')
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Post Route'))

module.exports = router;