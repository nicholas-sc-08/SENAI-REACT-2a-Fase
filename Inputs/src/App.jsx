import { useState } from 'react'
import './App.css'
import Jogo_de_adivinhacao from './components/Jogo_de_adivinhacao';
import Home from './pages/Home';
import Idades from './pages/Idades';
import Dias_da_semana from './pages/Dias_da_semana';
import Lucro from './pages/Lucro';
import Notas_parciais from './pages/Notas_parciais';
import Numeros_pares from './pages/Numeros_pares';
import Comparacao_de_numeros from './pages/Comparacao_de_numeros';
import Tarefa_uber from './pages/Tarefa_uber';
import Enzo_valentina from './pages/Enzo_valentina';

function App() {

  const [pagina, set_pagina] = useState(<Home/>);

  return (
    <>
      {pagina}

      <button onClick={() => {set_pagina(<Home/>)}}>Home</button>
    <button onClick={() => {set_pagina(<Idades/>)}}>Idades</button>
    <button onClick={() => {set_pagina(<Jogo_de_adivinhacao/>)}}>Jogo de Adivinhação</button>
    <button onClick={() => {set_pagina(<Dias_da_semana/>)}}>Dias da Semana</button>
    <button onClick={() => {set_pagina(<Lucro />)}}>Descontos</button>
    <button onClick={() => {set_pagina(<Notas_parciais/>)}}>Notas Parciais</button>
    <button onClick={() => {set_pagina(<Numeros_pares />)}}>Números Pares</button>
    <button onClick={() => {set_pagina(<Comparacao_de_numeros/>)}}>Comparação de Números</button>
    <button onClick={() => {set_pagina(<Tarefa_uber/>)}}>Tarefa Uber</button>
    <button onClick={() => {set_pagina(<Enzo_valentina/>)}}>Enzo & Valentina</button>
    </>
  )
}

export default App
