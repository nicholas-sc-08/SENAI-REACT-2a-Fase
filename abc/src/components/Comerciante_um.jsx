import {useState} from 'react'
function Comerciante_um() {

  // 5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
  // 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
  // será de 30%. Faça um programa que entre com o valor do produto e mostre 
  // o valor de venda.
    
    const [lucro, set_lucro] = useState();
    
  function obter_lucro(){

    const cem = 100;
    const trinta = 30;
    const valor_maximo_para_se_obter_quarenta_e_cinco_de_lucro = 20.00;
    const quarenta_e_cinco_porcento = 45;
    let valor_da_compra;
    let lucro_de_compra;
    valor_da_compra = parseFloat(prompt(`Qual será o valor da compra deste produto`));
    
        if(valor_da_compra > valor_maximo_para_se_obter_quarenta_e_cinco_de_lucro){
    
          lucro_de_compra = valor_da_compra * trinta / cem;
          
          set_lucro(`Lucro da compra de: R$${lucro_de_compra.toFixed(2)}.`);
        } else {
          
          lucro_de_compra = valor_da_compra * quarenta_e_cinco_porcento / cem;
    
            set_lucro(`Lucro da compra de: R$${lucro_de_compra.toFixed(2)}.`);
        };
  };
 

  return (
    <div className='bloco_de_atividade'>
      <h2>Exercicio Lista 3 | Atividade Um</h2>

      <button onClick={obter_lucro}>Realizar</button>
      {lucro}
    </div>
  )
}

export default Comerciante_um
