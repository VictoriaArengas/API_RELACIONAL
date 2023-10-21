//Instanciar paquetes de exprees para el uso de rutas
const express = require("express");
const router = express.Router();

const {
    findAllPerson,
    findOnePersonById,
    createPerson,
    updatePersonPartial,
    deletePerson
} = require('../controllers/personController')

//ruta para consultar persona
router.get('/', findAllPerson);

// //ruta para consultar una persona
router.get('/:id', findOnePersonById);

// //Ruta para crear persona
router.post('/', createPerson)

// //Ruta para actualizar persona parcialmente
router.patch('/:id', updatePersonPartial);

// //Elimina Persona
router.delete('/:id', deletePerson);

module.exports = router;