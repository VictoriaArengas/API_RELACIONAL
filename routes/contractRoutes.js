//Instanciar paquetes de exprees para el uso de rutas
const express = require("express");
const router = express.Router();

const {
    findAllContract,
    findOneContractById,
    createContract,
    updateContractPartial,
    deleteContract
} = require('../controllers/contractController')

//ruta para consultar Contract
router.get('/', findAllContract);

// //ruta para consultar una Contract
router.get('/:id', findOneContractById);

// //Ruta para crear Contract
router.post('/', createContract)

// //Ruta para actualizar Contract parcialmente
router.patch('/:id', updateContractPartial);

// //Elimina Contract
router.delete('/:id', deleteContract);

module.exports = router;