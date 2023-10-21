'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contract.init({
    company_id: DataTypes.INTEGER,
    person_id: DataTypes.INTEGER,
    salary: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};