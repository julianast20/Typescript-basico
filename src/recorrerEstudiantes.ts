import { Estudiante } from "./Estudiante";

const recorrerEstudiantes = (arregloEstudiantes: Estudiante[]) => {
    arregloEstudiantes.forEach(function(elemento){
        console.log(elemento);
        console.log("-----------------------")
    } )
}
export default recorrerEstudiantes;