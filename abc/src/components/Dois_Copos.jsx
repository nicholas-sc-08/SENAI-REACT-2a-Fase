import { useState } from "react"
function Dois_Copos() {
  
    const [numero, setNumero] = useState();
    const [par, setPar] = useState();

  function verificar(){

    let numero_digitado;

    numero_digitado = parseInt(prompt(`Favor digite um número:`));

    if(numero_digitado % 2 == 0){

        setPar(`É um número par.`);

    } else {
        
        setPar(`É um número impar`);
    };

    if(numero_digitado > 0){

        setNumero(`Seu número é positivo.\nNúmero: ${numero_digitado}.`);
    } else if(numero_digitado < 0){

        setNumero(`Seu número é negativo.\nNúmero: ${numero_digitado}.`);
    } else {

        setNumero(`Seu número é nulo.\nNúmero: ${numero_digitado}.`);
    };

  };
  
    return (
    <div className="bloco_de_atividade">
      
      <h2>Exercício Lista 1 | Atividade 2</h2>

        <button onClick={verificar}>Calcular</button>
        {numero}
        {par}
    </div>
  )
}

export default Dois_Copos
