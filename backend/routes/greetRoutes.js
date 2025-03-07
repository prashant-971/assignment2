// Import express (external module) for building routes
const express = require('express');
const { greet } = require('../controllers/greet-controller.js')

// Create a new router instance
const router = express.Router();

router.get('/greet', greet);

module.exports = router;
