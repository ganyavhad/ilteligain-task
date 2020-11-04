const Sequelize = require('sequelize');
let sequelize = new Sequelize('Task', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorAliases: false
})

module.exports = sequelize;
global.sequelize = sequelize;