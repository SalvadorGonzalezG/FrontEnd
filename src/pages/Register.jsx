// Pantalla para Registrar un usuario.
import { FaUser } from 'react-icons/fa'
import { PiUserCircleThin } from "react-icons/pi";

import { useState, useEffect } from 'react' //hooks de react local
import { useSelector, useDispatch } from 'react-redux' // estado global, mandar llamar la funcion disparadora
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' // mandar msj's
import { register, reset } from '../features/auth/authSlice' //importar funcion para registrar o resetear nuestro estado
import Spinner from '../components/Spinner'

//* useState permite pasar informacion entre componentes. **useEfect hook que se ejecuta cada vez que se renderiza un componente o cuando una de sus dependencias cambioa de valor(se modifica).

const Register = () => {
    const [formData, setFormData] = useState({ //primer estado datos del formulario para registrar el usuario.
        name: '',
        email: '',
        password: '', // para registro
        password2: '' // pasword de confirmacion al hacer login
    })
    //Desestructuracion del objeto formData el state que se habia creado.
    const { name, email, password, password2 } = formData
    // inicializar a navigate y a dispatch.
    const navigate = useNavigate() // redirigir la pagina cuando nos hayamos logeado
    const dispatch = useDispatch() // Al hacer clic al boton submit mandemos a llamaer a la funcion register

    // tengo que mandar a llamar a todos los datos que estan en mi slice y los tengo que tener disponibles en mi formulario para saber que esta pasando.
    const { user, isLoading, isError, isSuccess, message } = useSelector((state)=> state.auth) // recibe datos de mi estado global de constantes que ya estan desestructuradas para poder tener acceso a ellos..

    useEffect(() => { // hooks cuando se renderiza la app o alguna de sus dependencias para saber como se va modificando la app debido a la dependencias del estado global.
            // proviene de authSlice
        if(isError){ // si hay un error 
            toast.error(message) // message del estado global.
        }
        // Si todo salio bien.
        if(isSuccess){
            navigate('/login') //redirige a la pantalla de login
        }
        dispatch(reset()) // reset del slice que deje vacias las dependencias.
        // dependencias
    },[user, isError, isSuccess, message, navigate, dispatch]) // isloading no porquer va a estar cambiando constantemente si lo colocamos se va ciclar dicha dependencia.
        //funcion onChange
    const onChange = (e) => { //recibe un parametro (evento) 
        setFormData((prevState) => ({ //ejecuta el Seter es una funcion recibe como param el estado previo
            ...prevState, // "..." agarra el estado que tengo hace una copia se agrega algo para tener un nuevo estado.
            [e.target.name]: e.target.value // tomamos el nombre del imput y comienza a agregar lo que cecleemos
        } ))
    }
                // Funcion que evita regrescar la pagina!
    const onSubmit = (e) => {
        e.preventDefault()

       if(password !== password2) { // si pasword diferente de password2
        toast.error('Los passwords no coinciden')
       } else {
        const userData ={
            name,
            email,
            password
        }
        dispatch(register(userData))
       }
    }
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <PiUserCircleThin /> Registrar
                </h1>
                <   p>Por favor Crea tus credenciales.</p>
            </section>
            {/*  formulario */ }
        <section className="form">
            <form onSubmit={onSubmit}> 
                <div className="form-group">
                    <input 
                        type="text" 
                        className='form-control'
                        id='name'
                        name='name'
                        value={name}
                        placeholder='Teclea tu nombre'
                        onChange={onChange}// cada vez que yo escriba sobre el imput cambie el estado, es decir se dispare la funcion onchange 
                    />
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
                    <input 
                        type="password" 
                        className='form-control'
                        id='password2'
                        name='password2'
                        value={password2}
                        placeholder='porfavor confirma tu password'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>

        </>
    )
}

export default Register