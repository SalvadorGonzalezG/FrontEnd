// Pantalla para iniciar Sesión.
import { useState, useEffect } from "react" //hooks de react 
import { FaSignInAlt } from 'react-icons/fa'
import { IoMdSend } from "react-icons/io";

import { FaDeezer } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FcMusic } from "react-icons/fc";

import { useSelector, useDispatch } from 'react-redux' // estado global, mandar llamar la funcion disparadora
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' // mandar msj's
import { login, reset } from '../features/auth/authSlice' //importar funcion para registrar o resetear nuestro estado
import Spinner from '../components/Spinner'

const Formulario = () => {
            
    const [formData, setFormData] = useState({ //primer estado datos del formulario para registrar el usuario.
        email: '',
        password: '' // para registro
    })

    //Desestructuracion del objeto formData el state que se creo
    const { email, password } = formData

    const navigate = useNavigate() // redirigir la pagina cuando nos hayamos logeado
    const dispatch = useDispatch() // Al hacer clic al boton submit mandemos a llamaer a la funcion register

    // tengo que mandar a llamar a todos los datos que estan en mi slice y los tengo que tener disponibles en mi formulario para saber que esta pasando.
    const {user, isLoading, isError, isSuccess, message } = useSelector((state)=> state.auth) // recibe datos de mi estado global de constantes que ya estan desestructuradas para poder tener acceso a ellos.

    useEffect(() => { // hooks cuando se renderiza la app o alguna de sus dependencias para saber como se va modificando la app debido a la dependencias del estado global.
        // proviene de authSlice
    if(isError){ // si hay un error 
        toast.error(message) // message del estado global.
    }
    // Si todo salio bien.
    if(isSuccess){
        navigate('/') //redirige a la pantalla de login
    }
    dispatch(reset()) // reset del slice que deje vacias las dependencias.
    // dependencias
},[user, isError, isSuccess, message, navigate, dispatch])

    //funcion onChange
    const onChange = (e) => { //recibe un parametro (evento) 
        setFormData((prevState) => ({ //ejecuta el Seter es una funcion recibe como param el estado previo
            ...prevState, // "..." agarra el estado que tengo hace una copia se agrega algo para tener un nuevo estado.
            [e.target.name]: e.target.value // tomamos el nombre del imput y comienza a agregar lo que cecleemos
        } ))
    }
                // Funcion que evita refrescar la pagina!
    const onSubmit = (e) => {
        e.preventDefault()
                // cuando de clic en sub mit me genere un objeto con los datos email y password.
        const userData = { // Datos para poderme logear
            email,
            password
        }
        dispatch(login(userData))
    }
                // Si esta cargando manda el spiner.
    if(isLoading){
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h2>
                    <TbLogin2/> Login
                </h2>
                <h3> <FcMusic /></h3>
                <p>Por favor teclea tu email y pasword para poder ingresar.</p>
            </section>
            {/*  formulario */ }
        <section className="form">
            <form onSubmit={onSubmit}> 
                <div className="form-group">

                    <input 
                        type="email" 
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Teclea tu email'
                        onChange={onChange}
                    />
                    <input 
                        type="password" 
                        className='form-control'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Teclea tu password'
                        onChange={onChange}
                    />
                
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>
                        iniciar sesión .<IoMdSend/>
                    </button>
                </div>
            </form>
        </section>

        </>
    )
}
  

export default Formulario