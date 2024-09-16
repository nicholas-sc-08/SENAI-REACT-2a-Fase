import {useState} from 'react'

function Notas_parciais() {

    const [graduacao_de_nota, set_graduacao_de_nota] = useState();
     const [mensagem_invalida, set_mensagem_invalida] = useState();
     const [valor_inpt_um, set_valor_inpt_um] = useState(0);
     const [valor_inpt_dois, set_valor_inpt_dois] = useState(0);
     const [valor_inpt_tres, set_valor_inpt_tres] = useState(0);
     let array_das_notas = [];
     let validacao_inpt_um = false;
     let validacao_inpt_dois = false;
     let validacao_inpt_tres = false;
     let nota_um_existente_no_array;
     let nota_dois_existente_no_array;
     let nota_tres_existente_no_array;
     let pegar_posicao_array_nota_um;
     let pegar_posicao_array_nota_dois;
     let pegar_posicao_array_nota_tres;
     let soma_das_notas = 0;
     let media_final = 0;


 function verificar_valores_dos_inputs(){

     valor_inpt_um < 0 || valor_inpt_um > 10 ? validacao_inpt_um = false : validacao_inpt_um = true;
     valor_inpt_dois < 0 || valor_inpt_dois > 10 ? validacao_inpt_dois = false : validacao_inpt_dois = true;
     valor_inpt_tres < 0 || valor_inpt_tres > 10 ? validacao_inpt_tres = false : validacao_inpt_tres = true;

     validacao_inpt_um == false || validacao_inpt_dois == false || validacao_inpt_tres == false ? set_mensagem_invalida(`Hmm.. Parece que um dos inputs tem uma nota acima de 10 ou abaixo de 0.`) :

     set_mensagem_invalida(``);
     
     nota_um_existente_no_array = array_das_notas.includes(parseFloat(valor_inpt_um));
     nota_dois_existente_no_array = array_das_notas.includes(parseFloat(valor_inpt_dois));
     nota_tres_existente_no_array = array_das_notas.includes(parseFloat(valor_inpt_tres));
 
     array_das_notas.push(parseFloat(valor_inpt_um));   
     array_das_notas.push(parseFloat(valor_inpt_dois));   
     array_das_notas.push(parseFloat(valor_inpt_tres));
     
     pegar_posicao_array_nota_um = array_das_notas.indexOf(parseFloat(valor_inpt_um));
     pegar_posicao_array_nota_dois = array_das_notas.indexOf(parseFloat(valor_inpt_dois));
     pegar_posicao_array_nota_tres = array_das_notas.indexOf(parseFloat(valor_inpt_tres));
 
     for(let i = 0; i != array_das_notas.length; i++){

        soma_das_notas += array_das_notas[i];
     };

     media_final = soma_das_notas / array_das_notas.length;
    
     switch(true){

        case media_final >= 9.0 && media_final <= 10:

        set_graduacao_de_nota(`Graduação de Nota: A.`);
        break;

        case media_final >= 7.5 && media_final < 9.0:

        set_graduacao_de_nota(`Graduação de Nota: B.`);
        break;

        case media_final >= 6.0 && media_final < 7.5:

        set_graduacao_de_nota(`Graduação de Nota: C.`);
        break;

        case media_final >= 4.0 && media_final < 6.0:

        set_graduacao_de_nota(`Graduação de Nota: D.`);
        break;

        case media_final >= 0.0 && media_final < 4.0:

        set_graduacao_de_nota(`Graduação de Nota: E.`);
        break;
     };
    };

  return (
    <div>
      
    <h2>Notas Parciais</h2>

    <p>5.24 – Faça um programa que leia duas notas parciais obtidas por um 
aluno qualquer numa disciplina qualquer ao longo de um semestre 
qualquer, e calcule a sua média. De posse da média, esta deve ser 
convertida em conceito que é o novo hype do momento na educação!
A conversão deve seguir a regra descrita abaixo:
Nota Conceito
Entre ]9.0[ e [10.0] A
Entre ]7.5[ e [9.0] B
Entre ]6.0[ e [7.5] C
Entre ]4.0[ e [6.0] D
Entre [0.0] e [4.0] E
O resultado deste programa deve ser um relatório contendo as notas do 
aluno, sua média e o conceito atingido.</p>

    <label>1º Nota:</label>
    <input type="text" value={valor_inpt_um} onChange={(e) => {set_valor_inpt_um(e.target.value)}}/>

    <label>2º Nota:</label>
    <input type="text" value={valor_inpt_dois} onChange={(e) => {set_valor_inpt_dois(e.target.value)}}/>

    <label>3º Nota:</label>
    <input type="text" value={valor_inpt_tres} onChange={(e) => {set_valor_inpt_tres(e.target.value)}}/>

    <button onClick={verificar_valores_dos_inputs}>Calcular</button>

    {graduacao_de_nota}
    {mensagem_invalida}

    </div>
  )
};

export default Notas_parciais
