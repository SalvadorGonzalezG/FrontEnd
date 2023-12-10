// Pantalla para iniciar Sesión.
import { useState, useEffect } from "react" //hooks de react 
import { FaSignInAlt } from 'react-icons/fa'

const Formulario = () => {
            
    const [formData, setFormData] = useState({ //primer estado datos del formulario para registrar el usuario.
        email: '',
        password: '' // para registro
    })

    //Desestructuracion del objeto formData el state que se creo
    const { email, password } = formData

    //funcion onChange
    const onChange = (e) => { //recibe un parametro (evento) 
        setFormData((prevState) => ({ //ejecuta el Seter es una funcion recibe como param el estado previo
            ...prevState, // "..." agarra el estado que tengo hace una copia se agrega algo para tener un nuevo estado.
            [e.target.name]: e.target.value // tomamos el nombre del imput y comienza a agregar lo que cecleemos
        } ))
    }
                // Funcion que evita regrescar la pagina!
    const onSubmit = (e) => {
        e.preventDefault
    }

    return (
        <>
            <section className="heading">
                <h2>
                    <FaSignInAlt /> Login
                </h2>
                <   p>Por favor teclea tus credenciales.</p>
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
                        Login
                    </button>
                </div>
            </form>
        </section>

        </>
    )
}
  

export default Formulario