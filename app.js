const argv = require('./config/yargs').argv;
const tareas = require('./logic-config/tasks');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getListado();

        for (let registro of listado) {
            console.log('=======TAREAS========'.green);
            console.log(registro.descripcion);
            console.log('Estado: ', registro.completado);
            console.log('====================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');

}
//comandos node crear -d "Tarea uno"
//node app listar
//node app actualizar -d "tarea dos" -c true
//node app borrar -d "tarea tres"