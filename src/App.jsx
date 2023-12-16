import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"; // contenedor de todos los msj
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header";
import Dashboard from './pages/Dashboard'
import Register from './pages/Register';
import Formulario from './pages/Formulario';


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
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
