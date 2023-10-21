const { res, req } = require("express/lib/response");
const {
    findAll,
    findOneById,
    create,
    erase,
    update,
} = require('../services/companyService');

const findAllCompany = (req, res) => {
    findAll()
        .then((company) => {
            return res.status(200).send(company)
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const findOneCompanyById = (req, res) => {
    const id = req.params.id;
    findOneById(id)
        .then((company) => {
            return res.status(200).send(company);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const createCompany = (req, res) => {
    const { name, mail, cellphone } = req.body;
    create({ name, mail, cellphone, createdAt: new Date() })
        .then((company) => {
            return res.status(201).send(company);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
}

const deleteCompany = (req, res) => {
    const id = req.params.id;
    erase (id)
        .then((company) => {
            return res.sendStatus(204);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const updateCompanyPartial = (req, res) => {
    const { name, mail, cellphone } = req.body;
    const id = req.params.id;
    update(id, { name, mail, cellphone, updatedAt: new Date() })
        .then((company) => {
            return res.status(201).send(company);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
};

module.exports = {
    findAllCompany,
    findOneCompanyById,
    createCompany,
    updateCompanyPartial,
    deleteCompany
}