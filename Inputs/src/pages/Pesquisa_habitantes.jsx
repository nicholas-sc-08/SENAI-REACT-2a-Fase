import { useState } from 'react'

export default function Pesquisa_habitantes() {

    const [array_de_usuarios, set_array_de_usuarios] = useState([]);
    const [massege_error, set_massege_error] = useState(``);
    const [inpt_altura, set_inpt_altura] = useState(``);
    const [inpt_genero, set_inpt_genero] = useState(``);
    let porcentagem_de_homens_na_populacao;
    let soma_de_homens_na_populacao = 0;
function armazenar_objetos_em_vetor(){
    let soma_das_alturas_mulheres = 0;
    let media_das_alturas_mulheres = 0;

    if(array_de_usuarios.length >= 10) {

        for(let i = 0; i != array_de_usuarios.length; i++){

            if(array_de_usuarios[i].genero.toUpperCase() == `M`){

                soma_de_homens_na_populacao += 1;
            };

        };

        porcentagem_de_homens_na_populacao = array_de_usuarios.length * soma_de_homens_na_populacao / 100;

        for(let i = 0; i != array_de_usuarios.length ; i++){

            if(array_de_usuarios[i].genero.toUpperCase() == `F`){

                soma_das_alturas_mulheres += array_de_usuarios[i].altura;
            };
        };

        media_das_alturas_mulheres = soma_das_alturas_mulheres / array_de_usuarios.length;
        set_massege_error(`Limite de pessoas atingidas! Um total de 10.`);

    } else {

     
    let objeto = {
        id: Date.now(),
        altura: parseFloat(inpt_altura),
        genero: inpt_genero
    };
    let altura_maior = 0;
    let altura_menor = 0;
    let soma_das_alturas = 0;
    let media_das_alturas;

    set_array_de_usuarios([...array_de_usuarios, objeto]);

    for(let i = 0; i != array_de_usuarios.length; i++){

        if(array_de_usuarios[i].altura > altura_maior){

            altura_maior = array_de_usuarios[i].altura;

        } else {

            altura_menor = array_de_usuarios[i].altura;

        };

        soma_das_alturas += array_de_usuarios[i].altura;

    };

    media_das_alturas = soma_das_alturas / array_de_usuarios.length;



    }
};


  return (
    <>
    <h2>Pesquisa de Habitantes</h2>

    <p>7.10 - Foi feita um a pesquisa entre os habitantes de um a região e 
coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
um programa que leia os dados de 10 pessoas e informe: 
 a maior e a menor altura encontrada; 
 a média de altura das mulheres; 
 a média de altura da população; 
 o percentual de homens na população.
[Fonte: https://www.passeidireto.com/arquivo/36825150/exerciciosresolvidos-estrutura-de-repeticao]
    </p>
    <label>Altura</label>
    <input type="text" onChange={(e) => set_inpt_altura(e.target.value)} value={inpt_altura}/>

    <label>Gênero</label>
    <input type="text" onChange={(e) => set_inpt_genero(e.target.value)} value={inpt_genero}/>

    <button onClick={armazenar_objetos_em_vetor}>Adicionar</button>

    {massege_error}

    {array_de_usuarios.map((usuario) => (
        <div key={usuario.id}>
            <p>{a}</p>
            <p>{usuario.genero}</p>
        </div>
    ))}
    </>
  )
}
