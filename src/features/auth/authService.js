// peticiones que se van hacer desde el front al back (PROMESAS AL BACKEND)
import axios from 'axios';

// Direccion de nuestra api.
const API_URL = 'http://localhost:5000/api/users/' 

        // login de usuario.
        const login = async(userData) => {
            //Respuesta de axios ya que al registrar utilizamos el metodo post.
        const response = await axios.post(API_URL + 'login', userData) // Al URL y como segundo parametro pasamos los datos de usuario
            // cuando yo hago login
            // OJO NOTA: axios los datos siempre los va a devolver en un objeto dentro del response que se llama data
        if(response.data){ // Si existen datos de respuesta  
            localStorage.setItem('user', JSON.stringify(response.data)) // estos datos sean almacenados en el localstorage en un elemento llamado 'user'
        
        }

        return response.data // la respuesta del backend siempre se coloca como response.data en axios.
    }

// Registrar un usuario.
const register = async(userData) => {
        //Respuesta de axios ya que al registrar utilizamos el metodo post.
    const response = await axios.post(API_URL, userData) // Al URL y como segundo parametro pasamos los datos de usuario
    return response.data // la respuesta del backend siempre se coloca como response.data en axios.
}
//logout del usuario
const logout = async () => {
    localStorage.removeItem('user')// borrar del localStorage al item que quiero borrar 'user'.
}

const authService = { // exportacion para registrar el usuario
    register,
    login,
    logout
}

export default authService