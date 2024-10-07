"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    /*instrucciones para agregar (create) el estudiante al arreglo de estudiantes metodo de array en js permite insertar un alemento al arreglo?*/
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiante = function (indice, arregloEstudiantes, nombre, apellido) {
    /*Intrucciones para actualizar el estudiante que se encuentre en el indice indicado en el parametro*/
};
exports.actualizarEstudiante = actualizarEstudiante;
const borrarEstudiante = function (indice, arregloEstudiantes) {
    /*instrucciones para eliminar un elemento del arreglo que este en el indice del parametro*/
    arregloEstudiantes.splice(indice, 1);
};
exports.borrarEstudiante = borrarEstudiante;
