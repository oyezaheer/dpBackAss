const express = require('express');
const { createUser, getUsers } = require('../controllers/userControllers');

const router = express.Router();

// Define the routes for users
router.post('/users', createUser);
router.get('/users', getUsers);

module.exports = router;
