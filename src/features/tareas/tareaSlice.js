import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tareaService from "./tareaService";

const initialState = {
    // tareas de el usuario que este logueado.
    tareas: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//funcion para crear una nueva tarea
export const crearTarea = createAsyncThunk('tareas/crear', async (tareaData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.getTareas(tareaData,token) // filtramos la lista del tarea del id del usuario y ese ID se encuentra en el token
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// obtener las tareas del usuario.

export const getTareas = createAsyncThunk('tareas/getTareas', async(_, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.getTareas(token)
    } catch (error) {        
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})

//delete tarea

export const deleteTarea = createAsyncThunk('tareas/delete', async (tareaData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.deleteTarea(tareaData,token) // filtramos la lista del tarea del id del usuario y ese ID se encuentra en el token
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
        .addCase(crearTarea.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(crearTarea.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.mistareas.push(action, payload)
        })
        .addCase(crearTarea.rejected, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.message = action.payload
        })
        .addCase(getTareas.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(getTareas.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.mistareas.push(action, payload)
        })
        .addCase(getTareas.rejected, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.message = action.payload
        })
        .addCase(deleteTareas.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(deleteTareas.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.mistareas=state.mistareas.filter((tare)=> tareaService._ !== action.payload.id)
        })
        .addCase(deleteTarea.rejected, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.message = action.payload
        })
}
})

export const { reset } = tareaSlice.actions
export default tareaSlice.reducer // exportar todo el slice