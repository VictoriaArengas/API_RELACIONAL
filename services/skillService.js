const { Skill } = require('../models')

const findAll = async () => {
    return await Skill.findAll();
}

const findOneById = async (id) => {
    return await Skill.findByPk(id);
}

const create = async (skill) => {
    return await Skill.create(skill);
}

const erase = async (id) => {
    return await Skill.destroy({
        where: {
            id: id
        }
    });
}

const update = async (id, skill) => {
    return await Skill.update(skill, {
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