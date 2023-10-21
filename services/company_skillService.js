const { CompanySkill } = require('../models')

const findAll = async () => {
    return await CompanySkill.findAll();
}

const findOneById = async (id) => {
    return await CompanySkill.findByPk(id);
}

const create = async (CompanySkill) => {
    return await CompanySkill.create(CompanySkill);
}

const erase = async (id) => {
    return await CompanySkill.destroy({
        where: {
            id: id
        }
    });
}

const update = async (id, CompanySkill) => {
    return await skills.update(CompanySkill, {
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