import {useState} from 'react'

function O_Porco() {

    const [valor_total, set_valor_total] = useState();

// 5.25 - O porco: Faça um programa que leia o valor de um produto X e leia 
// a quantidade de moedas de um cofrinho que contenha: 
//  N moedas de 1 real; 
//  N moedas de 50 centavos; 
//  N moedas de 25 centavos; 
//  N moedas de 10 centavos; 
//  N moedas de 5 centavos; 
// O programa deverá verificar se o total de reais que contem no cofrinho é 
// o bastante para compra o produto X. 
// <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a 
// quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
// porco; ver se cabe no “orçamento”>

function cofrinho(){

    const valor_da_moeda_de_um_real = 1;
    const valor_da_moeda_de_cinquenta_centavos = 0.50;
    const valor_da_moeda_de_vinte_e_cinco_centavos = 0.25;
    const valor_da_moeda_de_dez_centavos = 0.10;
    const valor_da_moeda_de_cinco_centavos = 0.05;
    let quantidade_de_moedas;
    let orcamento;
    let valor_do_produto;
    let soma_das_moedas;
    let moedas_do_porquinho = {
        
        moedas_de_um_real: -1 ,
        moedas_de_cinquenta_centavos: -1,
        moedas_de_vinte_e_cinco_centavos: -1,
        moedas_de_dez_centavos: -1,
        moedas_de_cinco_centavos: -1
    };
    
    valor_do_produto = parseFloat(prompt(`Qual o valor do produto que você quer comprar?`));
    
    for(let i = 0; i != 5; i++){
        
        switch(true){

            case moedas_do_porquinho.moedas_de_um_real == -1:
                
            quantidade_de_moedas = parseFloat(prompt(`Quantas moedas de 1 real tem em seu porquinho?`));

            break;

            case moedas_do_porquinho.moedas_de_cinquenta_centavos == -1:

            quantidade_de_moedas = parseFloat(prompt(`Quantas moedas de 50 centavos tem em seu porquinho?`));
            
            break;

            case moedas_do_porquinho.moedas_de_vinte_e_cinco_centavos == -1:

            quantidade_de_moedas = parseFloat(prompt(`Quantas moedas de 25 centavos tem em seu porquinho?`));
            
            break;

            case moedas_do_porquinho.moedas_de_dez_centavos == -1:

            quantidade_de_moedas = parseFloat(prompt(`Quantas moedas de 10 centavos tem em seu porquinho?`));

            break;

            default:

            quantidade_de_moedas = parseFloat(prompt(`Quantas moedas de 5 centavos tem em seu porquinho?`));

            break;
        };


        if(moedas_do_porquinho.moedas_de_um_real == -1){

            moedas_do_porquinho.moedas_de_um_real = valor_da_moeda_de_um_real * quantidade_de_moedas;

        } else if(moedas_do_porquinho.moedas_de_cinquenta_centavos == -1){

            moedas_do_porquinho.moedas_de_cinquenta_centavos = valor_da_moeda_de_cinquenta_centavos * quantidade_de_moedas;
        } else if(moedas_do_porquinho.moedas_de_vinte_e_cinco_centavos == -1){

            moedas_do_porquinho.moedas_de_vinte_e_cinco_centavos = valor_da_moeda_de_vinte_e_cinco_centavos * quantidade_de_moedas;
        } else if(moedas_do_porquinho.moedas_de_dez_centavos == -1){

            moedas_do_porquinho.moedas_de_dez_centavos = valor_da_moeda_de_dez_centavos * quantidade_de_moedas;
        } else {

            moedas_do_porquinho.moedas_de_cinco_centavos = valor_da_moeda_de_cinco_centavos * quantidade_de_moedas;
        };

    };

    soma_das_moedas = moedas_do_porquinho.moedas_de_um_real + moedas_do_porquinho.moedas_de_cinquenta_centavos + moedas_do_porquinho.moedas_de_vinte_e_cinco_centavos + moedas_do_porquinho.moedas_de_dez_centavos + moedas_do_porquinho.moedas_de_cinco_centavos;

    orcamento = Number(soma_das_moedas.toFixed(2)) - valor_do_produto;


    console.log(moedas_do_porquinho);
    console.log(soma_das_moedas);
    console.log(orcamento);

    if(orcamento >= 0){

        set_valor_total(`Quantia total no porquinho R$${soma_das_moedas.toFixed(2)}. Preço do item: ${valor_do_produto}. Valor restante após a compra: R$${orcamento}.`);
    } else {

        set_valor_total(`Não é possível efetuar a compra!`);
    };

};
    


    return (
    <div className='bloco_de_atividade'>
      <h2>Exercicio Lista 3 | Atividade 3</h2>

<button onClick={cofrinho}>Calcular</button>
      {valor_total}
    </div>
  )
}

export default O_Porco
