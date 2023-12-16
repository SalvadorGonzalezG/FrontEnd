import { useDispatch } from 'react-redux'
import { deleteTarea } from '../features/tareas/tareaSlice'

const TareaItem = ({ tarea }) => {

        // iniciar la funcion dispatch ´para usarlo en la funcion onClick
    const dispatch = useDispatch()
   /* Metodo de js new Datte....*/
  return (
    <div className="tarea">
        <div>
            {new Date(tarea.createdAt).toLocaleString('es-MX')}
        </div>
        <h2>{tarea.texto}</h2>
        <button className='close' onClick={() => dispatch(deleteTarea(tarea._id))}>x</button>
    </div>
  )
}

export default TareaItem