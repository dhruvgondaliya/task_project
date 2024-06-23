const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const employeSalary = sequelize.define('salaries', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    employees_id: {
        type: DataTypes.STRING,
        references: {
            table: "employees",
            field: "id",
        }
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    from_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    to_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
}, {
    timestamps: false,
});

module.exports = employeSalary