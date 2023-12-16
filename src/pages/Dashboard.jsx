import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import TareaForm from "../components/TareaForm"
import Spinner from "../components/Spinner"
import { getTareas, reset } from "../features/tareas/tareaSlice"
import TareaItem from "../components/TareaItem"

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { mistareas, isLoading, isError, message } = useSelector((state) => state.tarea)

  useEffect(()=> {
    if(isError){
      console.log(message)
    }
    if(!user) { // si no hay un usuario mandame al login
      navigate('/login')
    }else { // y si hay usuario.
      dispatch(getTareas()) //dispatch mande a llamar a getTareras.
    }
    return () => {
      dispatch(reset())
    }
  },[user, navigate, isError, message, dispatch])
  if(isLoading){
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1> Bienvenido {user && user.name}</h1> {/*Si existe el usuario coloca el nombre del usuario.*/}
        <p> Dashboard de tareas</p>
      </section>

      < TareaForm />

      <section className="content">
        {mistareas.length > 0 ? 
        (
          <div className='tareas'>
            {mistareas.map((tarea) => (
              <TareaItem key = {tarea._id} tarea={tarea} />
            ))}
          </div>
        ) : (
          <h3>no hay tareas que mostrar</h3>
        )
        }
      </section>

    </>
  )
}

export default Dashboard