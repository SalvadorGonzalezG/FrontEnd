import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// el store envuelve toda la app creamos un provider que envuelva la app patra que toda tenga acceso al mismo.
import { store } from './app/store.js'
import { Provider } from 'react-redux' // heeramientas que reduc intaractue con react.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolvemos el store con el provider en la app*/}
      <App /> {/* todo lo que este en app va tener acceso al store */}
    </Provider>
  </React.StrictMode>,
)
