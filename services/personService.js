const { Person } = require('../models')

const findAll = async () => {
    return await Person.findAll();
}

const findOneById = async (id) => {
    return await Person.findByPk(id);
}

const create = async (person) => {
    return await Person.create(person);
}

const erase = async (id) => {
    return await Person.destroy({
        where: {
            id: id
        }
    });
}

const update = async (id, person) => {
    return await Person.update(person, {
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