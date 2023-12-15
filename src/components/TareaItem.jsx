import{ useDispatch } from 'react-redux'
import { deleteTarea } from '../feature/tarea/tareaSlice'

const TareaItem = ({ tarea }) => {

    

  return (
    <div className="tarea">
        <div>
            {new Date(tarea.createdAt).toLocaleString('es-MX')}
        </div>
        <h2>{tarea.texto}</h2>
        <button className="close" onClick={() =>dispatch(deleteTarea(tarea._id))}>x</button>
    </div>
  )
}

export default TareaItem