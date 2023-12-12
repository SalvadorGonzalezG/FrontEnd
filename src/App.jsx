import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Formulario from './pages/Formulario';
import { ToastContainer } from "react-toastify"; // contenedor de todos los msjs
import 'react-toastify/dist/ReactToastify.css'




function App() {
  
  return (
    <>
      <Router> {/* BrouserRouter*/}
        <div className="container">
          <Header />
          <Routes>
            <Route path='/Formulario' element={ <Formulario /> } />
            <Route path='/' element={ <Dashboard /> } /> {/*Si la pagina esta en raiz el elemento es el dashboar */}
            <Route path='/register' element={ <Register /> } />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
