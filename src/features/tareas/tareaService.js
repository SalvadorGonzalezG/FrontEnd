// funcionalidad para conectarnos al end point.
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tareas/'
 
// funcion para Crear una nueva tarea

const crearTarea = async (tareaData, token) => { // recibe 2 parametros tareaData del slice y el token
    const config = { // objeto donde pasaremos el token y lo pasamos como un header de autorización.
        headers: {
            Authorization: `Bearer ${token}`
        }
    }       // Ejecutar en la direccion un post y en el body le voy a pasar los datos que quiero ponerle a la tarea y al encabezado del bearer token.
    const response = await axios.post(API_URL, tareaData, config) 
            // axios todo lo devuelve en un objeto llamado data en la respuesta.
    return response.data
} 

// Obtener lista de tareas del usuario
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
} 

        // Borrar una tarea
const deleteTarea = async(idtarea, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + idtarea, config)

    return response.data
} 
 
const tareaService = {
    crearTarea,
    getTareas,
    deleteTarea
}
export default tareaService