import { useState } from "react"

function Garcom_Cara_Feia() {
    
    const [valor_emprestimo, set_valor_emprestimo] = useState();
    function emprestimo(){

    
        const cem = 100;
        let salaraio_do_usuario;
        let porcentagem_do_salario_do_usuario;
        let valor_do_emprestimo;
        let numero_de_prestacao;
        let valor_da_prestacao;
        let porcentagem_do_emprestimo = 30;
            
            salaraio_do_usuario = parseFloat(prompt(`Informe qual é o salário do usuário:`));
            numero_de_prestacao = parseInt(prompt(`Informe quantas prestações você deseja realizar.`));
            valor_do_emprestimo = parseFloat(prompt(`Qual será o valor do empréstimo.`));
            
            porcentagem_do_salario_do_usuario = valor_do_emprestimo * porcentagem_do_emprestimo / cem;
            valor_da_prestacao = valor_do_emprestimo / numero_de_prestacao;
            
            if(salaraio_do_usuario <= 0){
    
                set_valor_emprestimo(`Favor digitar um valor válido!`);
                
            } else if(valor_da_prestacao > porcentagem_do_salario_do_usuario){

                set_valor_emprestimo(`Valor do empréstimo maior do que 30% do salário!`);

            } else {
    
                set_valor_emprestimo(`Empréstimo pode ser concedido! Valor total do empréstimo: ${valor_do_emprestimo}. Número de prestações: ${numero_de_prestacao}. Valor a pagar por prestação: ${valor_da_prestacao.toFixed(2)}.`);
                };
    }
    

    return (
    <div>
      
        <button onClick={emprestimo} className="bloco_de_atividade">Realizar</button>

        {valor_emprestimo}
    </div>
  )
};

export default Garcom_Cara_Feia
