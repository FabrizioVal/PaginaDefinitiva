const express = require("express");
const router = express.Router();
module.exports = router; 

const { login } = require('../controllers/authController.js') 

router.post('/signin', login);

// Register function routing

const { register } = require('../controllers/authController.js')

router.post('/register', register); 