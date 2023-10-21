//Instanciar paquetes de exprees para el uso de rutas
const express = require("express");
const router = express.Router();

const {
    findAllCompany,
    findOneCompanyById,
    createCompany,
    updateCompanyPartial,
    deleteCompany
} = require('../controllers/companyController')

//ruta para consultar compañias
router.get('/', findAllCompany);

// //ruta para consultar una compañias
router.get('/:id', findOneCompanyById);

// //Ruta para crear compañias
router.post('/', createCompany)

// //Ruta para actualizar compañias parcialmente
router.patch('/:id', updateCompanyPartial);

// //Elimina compañias
router.delete('/:id', deleteCompany);

module.exports = router;