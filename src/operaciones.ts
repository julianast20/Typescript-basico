import { Estudiante } from "./Estudiante";
import recorrerEstudiantes from "./recorrerEstudiantes";

export const insertarEstudiante = function (estudiante: Estudiante, arregloEstudiantes:Estudiante[]){
    /*instrucciones para agregar (create) el estudiante al arreglo de estudiantes metodo de array en js permite insertar un alemento al arreglo?*/
    arregloEstudiantes.push(estudiante)
}

export const actualizarEstudiante = function(indice : number,arregloEstudiantes:Estudiante[], nombre : string, apellido : string){
    /*Intrucciones para actualizar el estudiante que se encuentre en el indice indicado en el parametro*/

}

export const borrarEstudiante = function(indice: number, arregloEstudiantes:Estudiante[]){
    /*instrucciones para eliminar un elemento del arreglo que este en el indice del parametro*/
    arregloEstudiantes.splice(indice , 1)

}