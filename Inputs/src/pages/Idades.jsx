import React, { useState } from 'react'
import Maior_de_idade from './Maior_de_idade'
import Menor_de_idade from './Menor_de_idade'

function Idades() {
    const [input_idade, set_input_idade] = useState();
    const [maior_de_idade, set_maior_de_idade] = useState(!true);
    const [menor_de_idade, set_menor_de_idade] = useState(!true);

    function processar_idade(){

      if(parseInt(input_idade) >= 18){

        set_maior_de_idade(true);
        set_menor_de_idade(false);
      } else {

        set_maior_de_idade(false);
        set_menor_de_idade(true);
      };
    };
  return (

    <div>
        <h2>Inputs</h2>

        <label>Idade:</label>
        <input type="text" onChange={(e) => {set_input_idade(e.target.value)}} value={input_idade}/>
        <button onClick={processar_idade}>Processar Idade</button>

        {maior_de_idade && <Maior_de_idade/>}
        {menor_de_idade && <Menor_de_idade/>}
    </div>
  )
}

export default Idades
