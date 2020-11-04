const Sequelize = require("sequelize");

const user = sequelize.define(
    "User", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM('Super Admin', 'Admin', 'User'),
            allowNull: false
        },
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, {
        timestamps: true,
    }
);
user.sync()
module.exports = user;