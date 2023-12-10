// Pantalla para Registrar un usuario.
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from "react" //hooks de react 
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
                    <FaUser /> Registrar
                </h2>
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