import { useState } from "react"

function Comparacao_de_numeros() {

    const [numero_maior, set_numero_maior] = useState();
    const [valor_inpt_um, set_valor_inpt_um] = useState();
    const [valor_inpt_dois, set_valor_inpt_dois] = useState();

function descobrir_numero_maior(){
    
    parseFloat(valor_inpt_um) == parseFloat(valor_inpt_dois) ? set_numero_maior(`Números iguais!`) : 

    parseFloat(valor_inpt_um) > parseFloat(valor_inpt_dois) ? set_numero_maior(`O maior número é o: ${valor_inpt_um}.`) : set_numero_maior(`O maior número é o: ${valor_inpt_dois}.`);

};
  return (
    <>
    
    <h2>Comparação de Números</h2>

    <p>Comparação de Números: Peça ao usuário para inserir dois números e determine qual deles é maior.</p>

    <div>
    <label>1º Número</label>
    <input type="text" value={valor_inpt_um} onChange={(e) => {set_valor_inpt_um(e.target.value)}}/>

    <label>2º Número</label>
    <input type="text" value={valor_inpt_dois} onChange={(e) => {set_valor_inpt_dois(e.target.value)}}/>
    </div>
    <div>
    <button onClick={descobrir_numero_maior}>Descobrir</button>
    {numero_maior}
    </div>
    
    </>
  )
}

export default Comparacao_de_numeros
