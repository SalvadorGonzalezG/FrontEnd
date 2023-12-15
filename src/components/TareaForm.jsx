import { useState } from "react"
import { useDispatch } from "react-redux" // para poder seleccionar el estado de las tareas 
import { crearTarea } from '../features/tareas/tareaSlice'

const TareaForm = () => {
 const [texto, setTexto] = useState('') // definicion del estado

 const dispatch = useDispatch()

    const onSubmint = (e) => {
        e.preventDefault()
        dispatch(crearTarea({ texto }))
        setTexto('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmint}>
            <div className="form group">
                <label htmlFor="texto">Tarea</label>
                <input 
                    type="text"
                    name="texto"
                    id="texto"
                    value={texto}
                onChange={(e) => setTexto(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    AGREGAR UNA TAREA
                </button>
            </div>
        </form>
    </section>
  )
}

export default TareaForm