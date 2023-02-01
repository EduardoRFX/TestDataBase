(async () => {

    const database = require('./db')
    const Usuario = require('./usuarios')
    await database.sync()

    const buscarTodosUsuarios = await Usuario.findAll()

    console.log(buscarTodosUsuarios)

})();