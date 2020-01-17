import { join, resolve } from 'path';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(resolve(), '/src/infra/database', '/milou.db'),
});
