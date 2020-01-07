import Sequelize from 'sequelize';
import { sequelize } from '@app/loaders/sequelize';

const User = sequelize.define('users', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING
  }
});

export const UserEntity = User;