import React from 'react'
import { useState } from 'react'

function Dias_da_semana() {
  
  const [dia_da_semna, set_dia_da_semana] = useState();
  const [valor_inpt, set_valor_inpt] = useState();
  
function semana(){

    switch(true){

        case parseInt(valor_inpt) == 1:

        set_dia_da_semana(`O dia da semana é: Domingo`);
        break;

        case parseInt(valor_inpt) == 2:

        set_dia_da_semana(`O dia da semana é: Segunda-Feira`);
        break;

        case parseInt(valor_inpt) == 3:

        set_dia_da_semana(`O dia da semana é: Terça-Feira`);
        break;

        case parseInt(valor_inpt) == 4:

        set_dia_da_semana(`O dia da semana é: Quarta-Feira`);
        break;

        case parseInt(valor_inpt) == 5:

        set_dia_da_semana(`O dia da semana é: Quinta-Feira`);
        break;

        case parseInt(valor_inpt) == 6:

        set_dia_da_semana(`O dia da semana é: Sexta-Feira`);
        break;

        case parseInt(valor_inpt) == 7:

        set_dia_da_semana(`O dia da semana é: Sábado`);
        break;

        default:

        set_dia_da_semana(`Favor inserir números entre 1 - 7.`);
        break;
    };
};

    return (
    <div>
      <h2>Dias da semana</h2>

      <p>Escolha entre números de 1 - 7 para saber qual dia semana é.</p>

      <input type="text" onChange={(e) => {set_valor_inpt(e.target.value)}} value={valor_inpt}/>

      <button onClick={semana}>Conferir</button>
      {dia_da_semna}
    </div>
  )
}

export default Dias_da_semana
