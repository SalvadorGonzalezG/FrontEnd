    /* ENCABEZADO */
    import { FaSignInAlt, FaUser } from 'react-icons/fa'; /* Iconos importados de react-icons*/
    import { AiOutlineLogout } from "react-icons/ai";

    import { Link, useNavigate } from 'react-router-dom';    /* Importar Link para hacer clic */
    import { useSelector, useDispatch } from 'react-redux'; /* useSelector para agarrar el slice global t useDispatch para mandar llamar a la fucion despachadora encargada de ejecutar el logout*/
    import { logout, reset } from '../features/auth/authSlice' //funciones que seran ejecutadas.


    const Header = () => {

        // inicializamos.
        const navigate = useNavigate()
        // cuando haga un dispacht y ese dispatch sea true me mande a la funcion de login.
        const dispatch = useDispatch()

        // mando llamar desestructurado al user de mi slice
        //useSelector para seleccionar el estado global es un metrodo
        // pasamos el estado actual y retornamos con la funciion flecha el estate.auth ya que dentro de este esta user
        const { user } = useSelector((state)=> state.auth) 


        const onLogout = () => {
            // que ejecute la funcion logout que esta en el slice, para que borre al usuario
            // y que despache un reset del usuario
            dispatch(logout())
            dispatch(reset())
            // que me lleve a la pantalla de login.
            //navigate('/login')
    
        }
        /*Si existe el usuario que me muestre el boton de logOut Si no existe el usuario que me muestre dos botones el de login y register */
      return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>App Tareas</Link>
            </div>
            <ul>
                  {user ?
                      (
                          <>
                              <button className='btn' onClick={onLogout}>
                                  <AiOutlineLogout /> Logout
                              </button>
                          </>
                      )
                      :
                      (
                          <>
                              <li>
                                  <Link to='/formulario'>
                                      <FaSignInAlt /> Login
                                  </Link>
                              </li>
                              <li>
                                  <Link to='/register'>
                                      <FaUser /> Register
                                  </Link>
                              </li>
                          </>
                      )}
            </ul>

        </header>
      )
    }
    
    export default Header