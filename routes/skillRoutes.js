//Instanciar paquetes de exprees para el uso de rutas
const express = require("express");
const router = express.Router();

const {
    findAllSkills,
    findOneSkillById,
    createSkill,
    updateSkillPartial,
    deleteSkill
} = require('../controllers/skillController')

//ruta para consultar habilidades
router.get('/', findAllSkills);

// //ruta para consultar una habilidad
router.get('/:id', findOneSkillById);

// //Ruta para crear habilidad
router.post('/', createSkill)

// //Ruta para actualizar habilidad parcialmente
router.patch('/:id', updateSkillPartial);

// //Elimina habilidad
router.delete('/:id', deleteSkill);

module.exports = router;