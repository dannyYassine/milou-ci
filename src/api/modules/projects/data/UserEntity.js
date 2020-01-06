const Sequelize = require('sequelize');
const { sequelize } = require('../../../../loaders/sequelize');

const User = sequelize.define('users', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING
  }
});

module.exports = {
  UserEntity: User
}