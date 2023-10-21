const jwt = require('jsonwebtoken');
const { User } = require('../models')
const { secretKey } = require('../config/auth');

const existsUser = async (username) => {
    const result = await User.findOne({
        where:{
            username: username
        }
    });
    return result;
}

const newUser = async (user) => {
    return await User.create(user);
}

const generateToken = (user) => {
    const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
    return token;
}


module.exports = {
    existsUser,
    newUser,
    generateToken
};
