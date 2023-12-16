import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tareaService from './tareaService'

const initialState = {
    // tareas de el usuario que este logueado.
    mistareas: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//funcion para crear una nueva tarea
export const crearTarea = createAsyncThunk('tareas/crear', async (tareaData, thunkAPI) => { // pasamos los datos como primer parametro de la tarea que quiero creear. 
    try {
        const token = thunkAPI.getState().auth.user.token // usando el thunkApi estoy obteniendo el auth user token y lo coloco en una variable que se llama token.
        return await tareaService.crearTarea(tareaData, token) // filtramos la lista del tarea del id del usuario y ese ID se encuentra en el token
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// obtener las tareas del usuario.

export const getTareas = createAsyncThunk('tareas/getTareas', async (_, thunkAPI) => { // primer parametro un underscore para decir que va vacio y como segundo parametro el callback thunkAPI
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.getTareas(token) // solo pasamos el token ya que en el payload del token esta el id del usuario.
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

//delete tarea

export const deleteTarea = createAsyncThunk('tareas/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token // pasamos el token para que verifique que el dueño es quien borrara la tarea.
        return await tareaService.deleteTarea(id, token) // filtramos la lista del tarea del id del usuario y ese ID se encuentra en el token
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// exportar y crear el slice
export const tareaSlice = createSlice({
    name: 'tarea',
    initialState,
    reducers: { //accion 
        reset: (state) => initialState // se encarfga de reiniciar la lista de las tareas.
    },
    extraReducers: (builder) => {
        builder
            .addCase(crearTarea.pending, (state) => {
                state.isLoading = true
            })
            .addCase(crearTarea.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.mistareas.push(action.payload)
            })
            .addCase(crearTarea.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload // rejectWithValue
            })
            .addCase(getTareas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTareas.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.mistareas = action.payload
            })
            .addCase(getTareas.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload // tareas sean igual a todo lo que me devuelve el endpoin
            })
            .addCase(deleteTarea.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTarea.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.mistareas = state.mistareas.filter((tarea) => tarea._id !== action.payload.id) //borrar cada tarea tando en db con en las vistas
            })
            .addCase(deleteTarea.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = tareaSlice.actions
export default tareaSlice.reducer // exportar todo el slice