import {useState} from 'react'

function Lucro() {

     // 5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
    // 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
    // será de 30%. Faça um programa que entre com o valor do produto e mostre 
    // o valor de venda.

    const [valor_total, set_valor_total] = useState();
    const [valor_inserido_no_input, set_valor_inserido_no_input] = useState();
    const valor_para_lucro = 20.00;
    const cem = 100;
    const quarenta_e_cinco = 45;
    const trinta = 30;
    let quarenta_e_cinco_porcento_de_lucro;
    let trinta_porcento_de_lucro;

    function definir_preco(){

        trinta_porcento_de_lucro = parseFloat(valor_inserido_no_input) * quarenta_e_cinco / cem;
        quarenta_e_cinco_porcento_de_lucro = parseFloat(valor_inserido_no_input) * trinta / cem;


        parseFloat(valor_inserido_no_input) > valor_para_lucro ? set_valor_total(parseFloat(valor_inserido_no_input) + quarenta_e_cinco_porcento_de_lucro) : set_valor_total(parseFloat(valor_inserido_no_input) + trinta_porcento_de_lucro);

    };

  return (
    <div>
      
      <h2>Atividade de Lucro</h2>

<p>5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
será de 30%. Faça um programa que entre com o valor do produto e mostre 
o valor de venda.</p>

<input type="text" onChange={(e) => {set_valor_inserido_no_input(e.target.value)}} value={valor_inserido_no_input}/>

<button onClick={definir_preco}>Calcular</button>  

    {valor_total}
    </div>
  )
}

export default Lucro
