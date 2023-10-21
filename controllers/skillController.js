const { res, req } = require("express/lib/response");
const {
    findAll,
    findOneById,
    create,
    erase,
    update,
} = require('../services/skillService');

const findAllSkills = (req, res) => {
    findAll()
        .then((skills) => {
            return res.status(200).send(skills)
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const findOneSkillById = (req, res) => {
    const id = req.params.id;
    findOneById(id)
        .then((skill) => {
            return res.status(200).send(skill);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const createSkill = (req, res) => {
    console.log(req.body)
    const { name } = req.body;
    create({ name, createdAt: new Date() })
        .then((skills) => {
            return res.status(201).send(skills);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
}

const deleteSkill = (req, res) => {
    const id = req.params.id;
    erase (id)
        .then((skills) => {
            return res.sendStatus(204);
        })
        .catch((err) => {
            return res.status(500).send("Hubo un error " + err);
        });
};

const updateSkillPartial = (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    update(id, { name, updatedAt: new Date() })
        .then((skills) => {
            return res.status(201).send(skills);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
};

module.exports = {
    findAllSkills,
    findOneSkillById,
    createSkill,
    updateSkillPartial,
    deleteSkill
}