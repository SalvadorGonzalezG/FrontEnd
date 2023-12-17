import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"; // contenedor de todos los msj
import 'react-toastify/dist/ReactToastify.css'
import { CgBolt } from "react-icons/cg";
import Header from "./components/Header";
import Dashboard from './pages/Dashboard'
import Register from './pages/Register';
import Formulario from './pages/Formulario';
import { IoLibraryOutline } from "react-icons/io5";

/*Si la pagina esta en raiz el elemento es el dashboar */
function App() {

  return (
    <>
      <Router> {/* BrouserRouter*/}
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Formulario' element={<Formulario />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
          <div>

          </div>
          <form action="https://github.com/SalvadorGonzalezG/FrontEnd.git"><button  className="botoncito" type="submit"> <IoLibraryOutline /> Doc FrontEnd.</button> </form>
            <br /> 
             <form action='https://github.com/SalvadorGonzalezG/2doProyectoBackend.git' ><button  className="botoncito" type="submit"> <IoLibraryOutline /> Doc. Backend. </button> </form>
            
          <footer>
            <p>©Copyright 2023 de S.G.G. <CgBolt /> </p>
          </footer>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
