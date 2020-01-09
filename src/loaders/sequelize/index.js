import path from 'path';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(path.resolve(), '/src/loaders/sequelize', '/milou.db')
});