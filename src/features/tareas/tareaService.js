// funcionalidad para conectarnos al end point.
import axios from "axios";

const API_URL = 'http://localhost:5000/api/tareas/'
 
// Crear una nueva tarea

const crearTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)

    return response.data
} 
// Obtener lista de tareas del usuario
const getTareas = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)

    return response.data
} 

const deleteTarea = async (idtarea, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + idtarea, tareaData, config)

    return response.data
} 
 
const tareaService = {
    crearTarea,
    getTareas,
    deleteTarea
}
export default tareaService