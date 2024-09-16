import { useState } from "react"
function Exemplos() {
    
    const [resultado, setResultado] = useState(1)
    
    function aumentar(){
        
        setResultado(resultado + 1);
    }

    function diminuir(){

        setResultado(resultado - 1);
    }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      {resultado}
    </div>
  )
}

export default Exemplos
