const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/auth');

const authenticateToken = (req, res, next) =>  {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token inválido' + err });
        }

        req.user = user; // Almacenar los datos del usuario en el objeto de solicitud para su posterior uso
        next();
    });
}

module.exports = {
    authenticateToken,
};
