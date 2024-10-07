"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones_1 = require("./operaciones");
/*let nombre: string =`Juliana`;
nombre=`Pepe`;
console.log(nombre);

const cedula: number =12345678;
console.log(cedula);*/
//Definiendo objetos(literal) estudiante
const estudiante1 = {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 20,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 808080
};
const estudiante2 = {
    nombre: "Pedro",
    apellido: "Martinez",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 101010
};
const estudiante3 = {
    nombre: "Manuel",
    apellido: "Calderon",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 505050
};
const estudiante4 = {
    nombre: "Mar",
    apellido: "Romero",
    edad: 13,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 191919
};
const estudiante5 = {
    nombre: "Juan",
    apellido: "Torres",
    edad: 19,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 303030
};
//Crear un arreglo de estudiantes
const listaEstudiantes = [estudiante1, estudiante2, estudiante3];
//OPERACIONES CON ARREGLOS:
console.log("------------");
console.log("Antes de insertar");
console.log(listaEstudiantes);
(0, operaciones_1.insertarEstudiante)(estudiante4, listaEstudiantes);
console.log("------------");
console.log("Despues de insertar");
console.log(listaEstudiantes);
console.log("------------");
console.log("Antes de borrar");
console.log(listaEstudiantes);
(0, operaciones_1.borrarEstudiante)(1, listaEstudiantes);
console.log("------------");
console.log("Despues de borrar");
console.log(listaEstudiantes);
