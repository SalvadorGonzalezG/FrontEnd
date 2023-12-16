// almacenar los slices y los reducers
import { configureStore } from "@reduxjs/toolkit"; //metodo de reductoolkit
import authReducer from '../features/auth/authSlice';
import tareaReducer from '../features/tareas/tareaSlice'


export const store = configureStore({ // utilizamos el metodo antes llamado
    reducer: {
        auth: authReducer,
        tarea: tareaReducer
    }
})