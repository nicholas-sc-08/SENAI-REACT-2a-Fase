import { useState } from "react"

function Tarefa_uber() {

//     5.7 Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
// tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
// destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
// acabar...
// Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
// única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
// e fez check in, mas não conseguiu entender de forma alguma como o hotel 
// calculava o valor da conta. Ele é meio burro, vocês sabem...
// O albergue utilizas faixas de preço de acordo com o número de diárias
// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diárias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;
// Outros fatos relevantes para determinar o valor da conta:
// - Ele acabou ganhando um desconto a mais de 10% do valor total porque 
// teve um “envolvimento emocional” com a moça que trabalha no balcão;
// - Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
// carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
// com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
// de desconto;
// - Ele se passou e vai pagar multa de R$150 por danos materiais.
// Criar um programa que lê o número de dias que ele vai ficar no albergue 
// e apresente o valor final da conta e sua composição (os detalhes, 
// pagamentos, descontos...);

    const [preco_total, set_preco_total] = useState();
    const [mensagem_de_erro, set_mensagem_de_erro] = useState();
    const [valor_inpt, set_valor_inpt] = useState();
    const preco_diaria_max = 100;
    const preco_diaria_mei = 90;
    const preco_diaria_min = 80;
    const valor_multa = 150;
    let desconto_de_dez_porcento;
    let desconto_de_quinze_porcento;
    let preco_original = 0;

function calcular_preco_total(){

    switch(true) {

        case parseInt(valor_inpt) <= 5 && parseInt(valor_inpt) > 0:

        preco_original = parseInt(valor_inpt) * preco_diaria_max;
        
        desconto_de_dez_porcento = preco_original * 10 / preco_diaria_max;
        preco_original -= desconto_de_dez_porcento;
        
        desconto_de_quinze_porcento = preco_original * 15 / preco_diaria_max;
        preco_original -= desconto_de_quinze_porcento;
        
        preco_original += valor_multa;
        
        set_preco_total(` R$${preco_original}.`);
        set_mensagem_de_erro(``);

        break;

        case parseInt(valor_inpt) > 5 && parseInt(valor_inpt) <= 10:

        preco_original = parseInt(valor_inpt) * preco_diaria_mei;
        
        desconto_de_dez_porcento = preco_original * 10 / preco_diaria_max;
        preco_original -= desconto_de_dez_porcento;
        
        desconto_de_quinze_porcento = preco_original * 15 / preco_diaria_max;
        preco_original -= desconto_de_quinze_porcento;
        
        preco_original += valor_multa;
        
        set_preco_total(` R$${preco_original}.`);
        set_mensagem_de_erro(``);

        break;

        case parseInt(valor_inpt) >= 11:

        preco_original = parseInt(valor_inpt) * preco_diaria_min;
        
        desconto_de_dez_porcento = preco_original * 10 / preco_diaria_max;
        preco_original -= desconto_de_dez_porcento;
        
        desconto_de_quinze_porcento = preco_original * 15 / preco_diaria_max;
        preco_original -= desconto_de_quinze_porcento;
        
        preco_original += valor_multa;
        
        set_preco_total(` R$${preco_original}.`);
        set_mensagem_de_erro(``);

        break;

        default:

        set_mensagem_de_erro(`A quantidade de dias deve mínimo 1!`);
            
    };
};





  return (
    <>
    
    <h2>Atividade Uber!</h2>

    <p>5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
acabar...
Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
e fez check in, mas não conseguiu entender de forma alguma como o hotel 
calculava o valor da conta. Ele é meio burro, vocês sabem...
O albergue utilizas faixas de preço de acordo com o número de diárias
Até 5 diárias, o preço por diária é R$100,00;
De 6 a 10 diárias, R$90,00 por dia;
A partir de 11 dias, sai R$80,00 por dia;
Outros fatos relevantes para determinar o valor da conta:
- Ele acabou ganhando um desconto a mais de 10% do valor total porque 
teve um “envolvimento emocional” com a moça que trabalha no balcão;
- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
de desconto;
- Ele se passou e vai pagar multa de R$150 por danos materiais.
Criar um programa que lê o número de dias que ele vai ficar no albergue 
e apresente o valor final da conta e sua composição (os detalhes, 
pagamentos, descontos...);</p>

    <div>

    <label>Quantidade de Diárias </label>
    <input type="text" onChange={(e) => {set_valor_inpt(e.target.value)}} value={valor_inpt}/>

    <div>
    <button onClick={calcular_preco_total}>Calcular</button>
    {preco_total}
    </div>


    </div>
    </>
  )
}

export default Tarefa_uber
