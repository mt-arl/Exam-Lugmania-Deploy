// userRoutes.js
const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');



router.get('/', sellerController.getAllSellers);

// Get user by ID



module.exports = router;