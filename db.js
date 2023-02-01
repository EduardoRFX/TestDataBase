require('dotenv').config()
const  Sequelize  = require('sequelize')

const sequelize = new Sequelize('hospital', 'root', process.env.SENHA, {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnect = async function() {
    try {
        await sequelize.authenticate();
        console.log('Conectado com Sucesso.');
    } catch (error) {
        console.error('Erro ao conectar:', error);
    }

}

testConnect()


module.exports = sequelize;
