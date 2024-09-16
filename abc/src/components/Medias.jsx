import { useState } from 'react';
function Medias() {
  
    const [resultado, setResultado] = useState();

    function chamarPrompt(){

        let nota_um = parseInt(prompt(`Digite o primeiro número:`));
        let nota_dois = parseInt(prompt(`Digite o segundo número:`));
        let nota_tres = parseInt(prompt(`Digite o terceiro número:`));
        let soma_das_notas = nota_um + nota_dois + nota_tres
        let media_final = soma_das_notas / 3;

        setResultado(media_final);
    };

    return (
    <div className='Media_Container'>
      
        <h2>Exercise</h2>
        <button onClick={chamarPrompt}>Calculate</button>

        {resultado}
    </div>
  )
}

export default Medias
