const opts = {
    base: {
        demand: true, // Indica que este parametro base es obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 // Si no se envia parametro x defecto es 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}