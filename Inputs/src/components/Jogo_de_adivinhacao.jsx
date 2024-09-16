import { useEffect } from "react";
import { useState } from "react"
function Jogo_de_adivinhacao() {
  
  const [resultado, set_resultado] = useState();
  const [valor_inpt, set_valor_inpt] = useState();
  const [exibir_mensagem, set_exibir_mensagem] = useState();

  useEffect(() => {
      
      set_resultado(Math.floor(Math.random() * 10));
  
    }, []);

    return (

    <div>
        <h2>Jogo de Adivinhação:</h2>
        <p>Adivinhe um número de 1 a 10!</p>
      <input type="text" onChange={(e) => {set_valor_inpt(e.target.value)}} value={valor_inpt}/>
      <button onClick={()=> {parseInt(valor_inpt) == resultado ? set_exibir_mensagem(`Você acertou!`) : set_exibir_mensagem(`Você errou!`)}}>Gerar Número</button>
      {exibir_mensagem}
    </div>
  )
}

export default Jogo_de_adivinhacao
