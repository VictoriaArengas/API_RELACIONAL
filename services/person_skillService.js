const { PersonSkill } = require('../models')

const findAll = async () => {
    return await PersonSkill.findAll();
}

const findOneById = async (id) => {
    return await PersonSkill.findByPk(id);
}

const create = async (personSkill) => {
    return await PersonSkill.create(personSkill);
}

const erase = async (id) => {
    return await PersonSkill.destroy({
        where: {
            id: id
        }
    });
}

const update = async (id, personSkill) => {
    return await PersonSkill.update(personSkill, {
        where: {
          id: id
        }
      });
}

module.exports = {
    findAll,
    findOneById,
    create,
    erase,
    update
}  
