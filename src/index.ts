import { Estudiante } from "./Estudiante";
import { insertarEstudiante, actualizarEstudiante, borrarEstudiante } from "./operaciones";

/*let nombre: string =`Juliana`;
nombre=`Pepe`;
console.log(nombre);

const cedula: number =12345678;
console.log(cedula);*/

//Definiendo objetos(literal) estudiante
const estudiante1: Estudiante={
    nombre:"Maria",
    apellido:"Lopez",
    edad:20,
    tipoIdentificacion:"CC",
    numeroIdentificacion:808080
}
const estudiante2: Estudiante={
    nombre:"Pedro",
    apellido:"Martinez",
    tipoIdentificacion:"TI",
    numeroIdentificacion:101010
}
const estudiante3: Estudiante={
    nombre:"Manuel",
    apellido:"Calderon",
    edad:18,
    tipoIdentificacion:"CC",
    numeroIdentificacion:505050
}
const estudiante4: Estudiante={
    nombre:"Mar",
    apellido:"Romero",
    edad:13,
    tipoIdentificacion:"TI",
    numeroIdentificacion:191919
}
const estudiante5: Estudiante={
    nombre:"Juan",
    apellido:"Torres",
    edad:19,
    tipoIdentificacion:"CC",
    numeroIdentificacion:303030
}

//Crear un arreglo de estudiantes
const listaEstudiantes : Estudiante[]=[estudiante1,estudiante2,estudiante3]


//OPERACIONES CON ARREGLOS:
console.log("------------")
console.log("Antes de insertar")
console.log(listaEstudiantes)
insertarEstudiante(estudiante4, listaEstudiantes)
console.log("------------")
console.log("Despues de insertar")
console.log(listaEstudiantes)


console.log("------------")
console.log("Antes de borrar")
console.log(listaEstudiantes)
borrarEstudiante(1,listaEstudiantes)
console.log("------------")
console.log("Despues de borrar")
console.log(listaEstudiantes)

