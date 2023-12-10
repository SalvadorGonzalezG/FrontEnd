    {/* ENCABEZADO */}
    import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'; {/* Iconos importados de react-icons*/}
    import { Link } from 'react-router-dom'; {/* Importar Link para hacer clic */}
    const Header = () => {
      return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>App Tareas</Link>
            </div>
            <ul>
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
            </ul>

        </header>
      )
    }
    
    export default Header