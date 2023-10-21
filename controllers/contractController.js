const { res, req } = require("express/lib/response");
const {
    findAll,
    findOneById,
    create,
    erase,
    update,
} = require('../services/contractService');

const findAllContract = (req, res) => {
    findAll()
        .then((contract) => {
            return res.status(200).send(contract)
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const findOneContractById = (req, res) => {
    const id = req.params.id;
    findOneById(id)
        .then((contract) => {
            return res.status(200).send(contract);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const createContract = (req, res) => {
    console.log(req.body)
    const { company_id, person_id, salary } = req.body;
    create({ company_id, person_id, salary, createdAt: new Date() })
        .then((contract) => {
            return res.status(201).send(contract);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
}

const deleteContract = (req, res) => {
    const id = req.params.id;
    erase (id)
        .then((contract) => {
            return res.sendStatus(204);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const updateContractPartial = (req, res) => {
    const { company_id, person_id, salary } = req.body;
    const id = req.params.id;
    update(id, { company_id, person_id, salary, updatedAt: new Date() })
        .then((contract) => {
            return res.status(201).send(contract);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
};

module.exports = {
    findAllContract,
    findOneContractById,
    createContract,
    updateContractPartial,
    deleteContract
}