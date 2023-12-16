import { useState } from "react"
import { useDispatch } from "react-redux" // para poder seleccionar el estado de las tareas 
import { crearTarea } from '../features/tareas/tareaSlice'

const TareaForm = () => {

    const [texto, setTexto] = useState('') // definicion del estado

 // mandar llamar una tarea.
    const dispatch = useDispatch()

    const onSubmit = (e) => { 
        e.preventDefault() // evitar refrescar la pagina
        dispatch(crearTarea({ texto })) //mandar llamar la funcion y paso como datos el texto
        setTexto('') // forma de modificar el state
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="texto">Tarea</label>
                <input 
                    type = "text"
                    name = "texto"
                    id = "texto"
                    value = {texto}
                    onChange={(e) => setTexto(e.target.value)} // unica forma de modificar al estado es mediante su seter.
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    AGREGAR UNA TAREA.
                </button>
            </div>
        </form>
    </section>
  )
}

export default TareaForm