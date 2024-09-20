import { useEffect, useState } from 'react'

export default function Pesquisa_habitantes() {

    
    const [array_de_usuarios, set_array_de_usuarios] = useState([]);
    const [array_de_resultados, set_array_de_resultados] = useState([]);
    const [massege_error, set_massege_error] = useState(``);
    const [inpt_altura, set_inpt_altura] = useState(``);
    const [inpt_genero, set_inpt_genero] = useState(``);
    let porcentagem_de_homens_na_populacao;
    let soma_de_homens_na_populacao = 0;
    let altura_maior = 0;
    let altura_menor = 0;
    let soma_das_alturas = 0;
    let media_das_alturas;
    let soma_das_alturas_mulheres = 0;
    let media_das_alturas_mulheres = 0;
    
     useEffect(()=>
         console.log(`Log bom: `,array_de_usuarios)
     ,[array_de_usuarios])
    function armazenar_objetos_em_vetor(){
        
        let objeto = {
            id: Date.now(),
            altura: parseFloat(inpt_altura),
            genero: inpt_genero.toUpperCase()
        };
        
        a()
    };
    
    function a(){
    
            set_array_de_usuarios([...array_de_usuarios, objeto]);
    
            for(let i = 0; i != array_de_usuarios.length; i++){
    
                if(array_de_usuarios[i].altura > altura_maior) {
    
                    altura_maior = array_de_usuarios[i].altura;
                };
            };
    
            for(let i = 0; i != array_de_usuarios.length;i++){
    
                array_de_usuarios[i].genero == `F` ? soma_das_alturas_mulheres += array_de_usuarios[i].genero : soma_de_homens_na_populacao += 1;
    
            };
    
            for(let i = 0; array_de_usuarios.length ; i++){
    
               soma_das_alturas += array_de_usuarios[i].altura;
            };
    
    
            media_das_alturas = soma_das_alturas / array_de_usuarios.length;
            media_das_alturas_mulheres = soma_das_alturas_mulheres / array_de_usuarios.length;
    
            
            console.log(altura_maior)
            console.log(`a`, altura_menor)
            console.log(`soma`,soma_das_alturas)
            console.log(`media_mul`, media_das_alturas_mulheres)
            console.log(`media_das_alt`, media_das_alturas)
            console.log(array_de_usuarios);
}

function exibir_resultado() {
    
        let resultado_objeto = {
            
            id: Date.now(),
            maior_altura : altura_maior,
            menor_altura : altura_menor,
            media_de_altura : media_das_alturas,
            media_de_altura_mulheres : media_das_alturas_mulheres,
            percentual_de_homens: porcentagem_de_homens_na_populacao
        };
        
        set_array_de_resultados([...array_de_resultados, resultado_objeto]);
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

    {array_de_usuarios.map((relatorio) => (
        <div key={relatorio.id}>
            <p>Maior Altura encontrada: {relatorio.altura}.</p>
            <p>Menor Altura encontrada: {relatorio.genero}.</p>
            <p>Percentual de homens na população: {relatorio.percentual_de_homens}.</p>
            <p>Media de altura da população: {relatorio.media_de_altura}.</p>
            <p>Media de altura das mulheres na população: {relatorio.media_de_altura_mulheres}.</p>
            <p></p>
        </div>
    ))}
    </>
  )
}
