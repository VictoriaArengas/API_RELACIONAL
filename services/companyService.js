const { Company } = require('../models')

const findAll = async () => {
    return await Company.findAll();
}

const findOneById = async (id) => {
    return await Company.findByPk(id);
}

const create = async (company) => {
    return await Company.create(company);
}

const erase = async (id) => {
    return await Company.destroy({
        where: {
            id: id
        }
    });
}

const update = async (id, company) => {
    return await Company.update(company, {
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