import { useState } from 'react'

function Enzo_valentina() {

    const [resultado, set_resultado] = useState();
    let altura_valentina = 1.50;
    let altura_enzo = 1.40;
    let ano = 0;
function verificar_ano_que_enzo_passa_valentina(){

    for(; altura_enzo < altura_valentina; ano++){

        altura_valentina += 0.02;
        altura_enzo += 0.03;
    };

    set_resultado(`Em ${ano} anos Enzo será mais alto que valentina.`);
};

  return (
    <>
    <div>

     <div>
    <h2>Enzo & Valentina</h2>
    
    <p>7.11 – Enzo e Valentina:
Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
ano. Crie um programa e mostre quando Enzo será mais 
alto que Valentina.</p>

    <button onClick={verificar_ano_que_enzo_passa_valentina}>Calcular</button>
    </div>   
    {resultado}
    </div>
    </>
  )
}

export default Enzo_valentina
