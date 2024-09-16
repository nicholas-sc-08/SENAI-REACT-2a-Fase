import { useState } from 'react'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import './App.css'
import './pages/Cadastro.css'
import Login from './components/Login.jsx'
import Render from './pages/Render.jsx'

function App() {
  
  const [pagina, set_pagina] = useState(<Home />);



  return (
    <>
      {pagina}

      <button onClick={() => {set_pagina(<Render />)}}>Render</button>
      <button onClick={() => {set_pagina(<Home />)}}>Home</button>
      <button onClick={() => {set_pagina(<Cadastro />)}}>Cadastro</button>
      <button onClick={() => {set_pagina(<Login />)}}>Login</button>
    </>
  )
}

export default App
