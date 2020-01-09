import path from 'path';
import Sequelize from 'sequelize';

console.log(path.resolve(path.resolve(), '/src/loaders/sequelize', '/milou.db'));
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(path.resolve(), '/src/loaders/sequelize', '/milou.db')
});