//importar modulo fileSystem
const fs = require('fs');

//Arreglo
listadoTareas = [];

//Crear y guardar un JSON
const guardarDB = () => {
    // return new Promise((resolve, reject) => {
    let data = JSON.stringify(listadoTareas); //Ejemplo original
    // const data = new Uint8Array(Buffer.from(JSON.stringify(ListadoTareas)));
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', error);
        // reject(err);
        // else   resolve(`Se guardo la informacion`);
    });
    // });
};

//Lee y carga el JSON al arreglo
const cargaDBJSON = () => {

    try {
        listadoTareas = require('../db/data.json'); //console.log(listadoTareas);//Imprime el JSON
    } catch (error) {
        listadoTareas = [];
    }
};

//metodo para crea un objeto y generar y guardar un JSON
const crear = (descripcion) => {

    cargaDBJSON();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoTareas.push(porHacer);
    guardarDB();
    return porHacer;

};
//Solo imprime el listado en consola
const getListado = () => {
    cargaDBJSON();
    return listadoTareas;
};

const actualizar = (descripcion, completado = true) => {

    cargaDBJSON();

    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    console.log(index);

    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
};

const borrar = (descripcion) => {

    cargaDBJSON();
    /*//Opcion de encontrar index a eliminar
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
     if (index >= 0) {
        listadoTareas.splice(index, 1);
        guardarDB();
        return true;
    } else
        return false;
    */
    //Eliminar utilizando filter regresar los que no coincida
    let nuevoListado = listadoTareas.filter(
        tarea => {
            return tarea.descripcion !== descripcion;
        });
    if (listadoTareas.length === nuevoListado.length)
        return false;
    else {
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};