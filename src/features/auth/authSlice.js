    // FrontEnd del backEnd ya hecho.
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit' // metodos fullfield, rejected, pending 
import authService from './authService'

    //  Obtener del localStorage los datos del usuario si es que existen.
    const user = JSON.parse(localStorage.getItem('user')) // constante que obtiene del local storage en formato json los datos de 'user' es decir alli se encuentra la respuesta del backEnd

        //Estado inicial de la app
    const initialState = {
        user: user ? user : null, //Usuario que se logeo, // Si existen esos datos en el localstorage que los ponga y si no que coloque null.
        isError: false, //Si hubo un error 
        isSuccess: false, //Si todo salio bien
        isLoading: false, // Cuando es Pending
        message: '' // el rejected devuelve el msj con el throw new Error
    }
    // Login usuario
    export const login = createAsyncThunk('auth/login', async(user, thunkAPI) =>{ // para poder ver si la peticion fue rechazada, exitosa o se ecneuntra pendiente.
        try {                         // funcion que viene desde authService.js
            return await authService.login(user) //funcion generada en el servicio se pasa como parametro los datos del usuario que yo quiero registrar.
        } catch (error) {
            // cachar en todos los lugares posibles donde nos podria salir ese error.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message) // si pasa todo lo anterior quiero que me retorne del thunkappi un metodo que se llama rejectwithvalue como si fuera una accion.
        }
    })

    // funcion para Registrar usuario
                            // parametro 1 prefijo en cadena de texto
                            // paylot creator es una funcion asincrona
                            // thunk api convertir respuestas en acciones.
    export const register = createAsyncThunk('auth/register', async(user, thunkAPI) =>{ // para poder ver si la peticion fue rechazada, exitosa o se ecneuntra pendiente.
        try {                         // funcion que viene desde authService.js
            return await authService.register(user) //funcion generada en el servicio se pasa como parametro los datos del usuario que yo quiero registrar.
        } catch (error) {
            // cachar en todos los lugares posibles donde nos podria salir ese error.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message) // si pasa todo lo anterior quiero que me retorne del thunkappi un metodo que se llama rejectwithvalue como si fuera una accion.
        }
    })
        // Logout del usuario.
    export const logout = createAsyncThunk('auth/logout', async() => { // primer parametro es prefijo
        await authService.logout() // cuando se ejequete esta funcion desconecte al usuario que este logeado.
    })

    export const authSlice = createSlice({
        name: 'auth', // nombre del slice el cual se llama auth de autentificacion el cual va a tener un estado inicial
        initialState, //estado inicial que se definio arriba.
        reducers: { //objeto
            // accion reductora
            reset: (state) => { // funcion para que cuando deje de servir el estado lo inicalicemos
                state.isLoading = false // estado actualmente activo
                state.isSuccess = false
                state.isError = false
                state.message = ''
            }
        },
        //lo que va suceciendo con nuestra app **extraReducers de authSlice.
        extraReducers: (builder) => { // Cicloo de vida de pending, fullfield y rejected.
            //posibles respuestas.
            builder
            //si esta pending entonces state.loading es true
                .addCase(register.pending, (state)=>{
                    state.isLoading = true
                })
                // Si todo funcviono 
                //action es lo que me debolvio la promesa.
                .addCase(register.fulfilled, (state, action) => {
                    state.isLoading = false // is loading lo cambiamos a false ya que ya estuvo activo
                    state.isSuccess = true
                    state.user = action.payload // si me pude registrar ya tengo un usuario lo que me va a devolver mi promesa.
                })
                // Si salio todo mal
                .addCase(register.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null // nos aseguramos que cuando hay un error ala hora de registrar un usuario que el usuario sea null.
                })

                .addCase(login.pending, (state) => {
                    state.isLoading = true
                })
                
                .addCase(login.fulfilled, (state, action) => {
                    state.isLoading = false 
                    state.isSuccess = true
                    state.user = action.payload 
                })
                
                .addCase(login.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null 
                })
                .addCase(logout.fulfilled, (state) => {
                    state.isSuccess = true
                    state.user = null
                })
        }
    })
            // exportar como si fueran acciones.
    export const { reset } = authSlice.actions 
    export default authSlice.reducer 
    // en el store se guarda esta rebanada 