//Comandos de configuracion

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Completado o pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento', {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
};