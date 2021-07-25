const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
};