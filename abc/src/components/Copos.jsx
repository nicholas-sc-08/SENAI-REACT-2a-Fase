import {useState} from 'react'

function Copos() {

    const [numero, setNumero] = useState();
    
    let numero_digitado;
    
function leitura_de_numero(){

   numero_digitado = parseInt(prompt(`Digite um número`));

    if(numero_digitado > 0){

        setNumero(`Número positivo, ${numero_digitado}`);

    } else if(numero_digitado < 0){

        setNumero(`Número negativo, ${numero_digitado}`);
    } else {

        setNumero(`Número nulo, ${numero_digitado}`);
    };

    
};

  return (
    <div className='bloco_de_atividade'>
    <h2>Exercício Lista 1 | Atividade 1</h2>
    <button onClick={leitura_de_numero}>Verificar</button>

    {numero}

    
    </div>
  )
}

export default Copos
