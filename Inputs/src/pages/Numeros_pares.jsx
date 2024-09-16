import { useState } from 'react'

function Numeros_pares() {

    const [resultado, set_resultado] = useState();
    const [valor_inpt, set_valor_inpt] = useState();
    

function verificar_numero(){

    parseFloat(valor_inpt) % 2 == 0 ? set_resultado(`Seu número é um número par!`) : set_resultado(`Seu número é um número impar!`);
}; 

  return (
    <>
    <div>

        <h2>Números Pares</h2>

        <p>Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.</p>
        <div>
        <input type="text" value={valor_inpt} onChange={(e) => {set_valor_inpt(e.target.value)}}/>
        <button onClick={verificar_numero}>Verificar</button>

        </div>

        {resultado}
    </div>
    
    </>
  )
}

export default Numeros_pares