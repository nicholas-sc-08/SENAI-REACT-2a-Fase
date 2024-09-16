
import {useState} from 'react'

function Notas_Parciais() {

    const [notas, set_notas] = useState();
    // 5.24 – Faça um programa que leia duas notas parciais obtidas por um 
    // aluno qualquer numa disciplina qualquer ao longo de um semestre 
    // qualquer, e calcule a sua média. De posse da média, esta deve ser 
    // convertida em conceito que é o novo hype do momento na educação!
    // A conversão deve seguir a regra descrita abaixo:
    // Nota Conceito
    // Entre ]9.0[ e [10.0] A
    // Entre ]7.5[ e [9.0] B
    // Entre ]6.0[ e [7.5] C
    // Entre ]4.0[ e [6.0] D
    // Entre [0.0] e [4.0] E
    // O resultado deste programa deve ser um relatório contendo as notas do 
    // aluno, sua média e o conceito atingido.

    function calcular_media(){

        let array_notas_aluno = [];
        let nota_do_aluno;
        let soma_das_notas = 0;
        let obter_media;
    
        for(let i = 1; array_notas_aluno.length != 3; i++){

            nota_do_aluno = parseFloat(prompt(`Digita qual a ${i}º nota do aluno:`));
        
            if(nota_do_aluno < 0 || nota_do_aluno > 10){
        
                set_notas(`Favor digitar uma nota válida!`);
                i--;
            } else {
        
                array_notas_aluno.push(nota_do_aluno);
            };
        };

        for(let i = 0; i != array_notas_aluno.length;i++){

            soma_das_notas += array_notas_aluno[i];

        };

        obter_media = soma_das_notas / array_notas_aluno.length;
        
            switch(true){
        
                case obter_media >= 9:
        
                set_notas(`Nota: A. Média: ${obter_media.toFixed(2)}`);

                break;

                case obter_media >= 7.5 && obter_media < 9:

                set_notas(`Nota: B. Média: ${obter_media.toFixed(2)}`);

                break;

                case obter_media >= 6.0 && obter_media < 7.5:

                set_notas(`Nota: C. Média: ${obter_media.toFixed(2)}`);

                break;

                case obter_media >= 4.0 && obter_media < 6.0:

                set_notas(`Nota: D. Média: ${obter_media.toFixed(2)}`);

                break;

                default:

                set_notas(`Nota: E. Média: ${obter_media.toFixed(2)}`);

                break;
            };
    };

  return (
    <div className='bloco_de_atividade'>
      
      <h2>Exercício Lista 3 | Atividade 2</h2>

<button onClick={calcular_media}>Calcular</button>
      {notas}
    </div>
  )
}

export default Notas_Parciais
