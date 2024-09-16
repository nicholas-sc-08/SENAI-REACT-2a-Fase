import { useState } from "react"
import Painel_adm from "../components/Painel_adm";
import Produtos from "../components/Produtos";
import Usuario_logado from "../components/Usuario_logado";
import Login from "../components/Login";

function Render() {

    const [adm, set_adm] = useState(!false);
    const [idade, set_idade] = useState(0);
    const [usuario, set_usuario] = useState(!true);

  return (
    <div>

      <h1>Renderizações condicionais</h1>

      <div className="render_container">
        <button onClick={() => {set_adm(true)}}>ADM</button>
        <button onClick={() => {set_adm(!true)}}>oreiasseca</button>
        {adm && <Painel_adm />}

      </div>

      <div className="render_container">
            <button onClick={() =>{set_idade(idade + 1)}}>+</button>
            {idade}
            <button onClick={() =>{set_idade(idade - 1)}}>-</button>
            {idade >= 18 && <Produtos/>}
        </div> 

        <div className="render_container">
         <button onClick={() => {set_usuario(!false)}}>Logar</button>
         <button onClick={() => {set_usuario(!true)}}>10logar</button>
          {usuario ? <Usuario_logado /> : <Login />}
        </div>


    </div>
  )
}

export default Render
