const Sequelize = require('sequelize')
const database = require('./db')

const Usuario = database.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING
    },
    ativo: {
        type: Sequelize.BOOLEAN
    },
    tipoUsuario: {
        type: Sequelize.STRING
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }

})

module.exports = Usuario
