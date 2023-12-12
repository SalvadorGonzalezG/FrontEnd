// peticiones que se van hacer desde el front al back (PROMESAS AL BACKEND)
import axios from "axios";

// Direccion de nuestra api.
const API_URL = 'http://localhost:5000/api/users/' 

// Registrar un usuario.
const register = async(userData) => {
        //Respuesta de axios ya que al registrar utilizamos el metodo post.
    const response = await axios.post(API_URL,userData) // Al URL y como segundo parametro pasamos los datos de usuario
    return response.data // la respuesta del backend siempre se coloca como response.data en axios.
}

const authService = { // exportacion para registrar el usuario
    register
}

export default authService