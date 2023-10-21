const { Contract } = require('../models')

const findAll = async () => {
    return await Contract.findAll();
}

const findOneById = async (id) => {
    return await Contract.findByPk(id);
}

const create = async (contract) => {
    return await Contract.create(contract);
}

const erase = async (id) => {
    return await Contract.destroy({
        where: {
            id: id
        }
    });
}

const update = async (id, contract) => {
    return await Contract.update(contract, {
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