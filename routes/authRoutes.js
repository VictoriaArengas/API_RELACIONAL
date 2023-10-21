const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define las rutas de autenticación
router.post('/', authController.login);
router.post('/register', authController.register);


module.exports = router;