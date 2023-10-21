const { res, req } = require("express/lib/response");
const {
    findAll,
    findOneById,
    create,
    erase,
    update,
} = require('../services/personService');

const findAllPerson = (req, res) => {
    findAll()
        .then((Person) => {
            return res.status(200).send(Person)
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const findOnePersonById = (req, res) => {
    const id = req.params.id;
    findOneById(id)
        .then((Person) => {
            return res.status(200).send(Person);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const createPerson = (req, res) => {
    console.log(req.body)
    const { name, cc, mail, cellphone, user_id } = req.body;
    create({ name, cc, mail, cellphone, user_id, createdAt: new Date() })
        .then((Person) => {
            return res.status(201).send(Person);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
}

const deletePerson = (req, res) => {
    const id = req.params.id;
    erase (id)
        .then((Person) => {
            return res.sendStatus(204);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const updatePersonPartial = (req, res) => {
    const { name, cc, mail, cellphone, user_id } = req.body;
    const id = req.params.id;
    update(id, { name, updatedAt: new Date() })
        .then((Person) => {
            return res.status(201).send(Person);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
};

module.exports = {
    findAllPerson,
    findOnePersonById,
    createPerson,
    updatePersonPartial,
    deletePerson
}