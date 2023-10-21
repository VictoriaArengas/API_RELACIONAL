const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwtSecret');

// Middleware para verificar el token
function verifyToken(req, res, next) {
    // Implementa la verificación del token
}

// Ruta protegida
router.get('/ruta_protegida', verifyToken, (req, res) => {
    // Ruta protegida solo accesible con un token válido
});

module.exports = router;
