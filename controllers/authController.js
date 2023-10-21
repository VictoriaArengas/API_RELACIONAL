const bcrypt = require('bcrypt');
const { existsUser, newUser, generateToken  } = require('../services/authService');

// Función para registrar un nuevo usuario
const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Comprobar si el usuario ya existe en la base de datos
        const existingUser = await existsUser(username);
        if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }
        // Generar un hash de la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash('password', 10);
        //crea nuevo user
        newUser({ username, password: hashedPassword , createdAt: new Date() })
            .then(( user ) => {
                return res.status(201).send(user);
            })
            .catch((err) => {
                return res.status(500).send("Hubo un error " + err);
            });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo crear el usuario' });
    }
}

// Función para iniciar sesión y generar un token JWT
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Esperar a que se resuelva la promesa para obtener el usuario
        const existingUser = await existsUser(username);

        if (!existingUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Comparar la contraseña ingresada con el hash almacenado en la base de datos
        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (passwordMatch) {
            // Generar un token JWT y responder con él
            const token = generateToken(existingUser);
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Contraseña incorrecta' });
        }
    } catch (err) {
        const errorLine = err.stack.split('\n')[1]; // Esto obtiene la segunda línea del stack que contiene la información de la ubicación del error

        // Luego, envía una respuesta con el mensaje de error y la línea del error
        res.status(500).json({ error: 'Error en la autenticación', errorLine });
    }
}


module.exports = {
    register,
    login,
};
