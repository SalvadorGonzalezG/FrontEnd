import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"; // contenedor de todos los msj
import 'react-toastify/dist/ReactToastify.css'
import { CgBolt } from "react-icons/cg";
import Header from "./components/Header";
import Dashboard from './pages/Dashboard'
import Register from './pages/Register';
import Formulario from './pages/Formulario';
import { IoLibraryOutline } from "react-icons/io5";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

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
             <form action='https://github.com/SalvadorGonzalezG/2doProyectoBackend.git' ><button  className="botoncito" type="submit"> <IoLibraryOutline /> Doc. BackEnd. </button> </form>
            
          <footer>
            <p>©Copyright 2023 de S.G.G. <CgBolt /> MERN proyect type. </p>
            <h4><SiMongodb/> <SiExpress/> <FaReact/> <FaNodeJs/> </h4>
          </footer>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
