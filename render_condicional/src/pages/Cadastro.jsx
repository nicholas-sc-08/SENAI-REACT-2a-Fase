import { useState } from "react"

function Cadastro() {
    const [nome, set_nome] = useState();
    const [email, set_email] = useState();
    const [senha, set_senha] = useState();
    const [confirmar_senha, set_confirmar_senha] = useState();
    const [valor_select, set_valor_select] = useState();
    const [mensagem_de_erro, set_mensagem_de_erro] = useState();
    let nome_valido = false;
    let senha_valida = false;

    const handle_nome = (event) => {

        set_nome(event.target.value);
    };

    const handle_email = (event) => {

        set_email(event.target.value);
    };

    const handle_senha = (event) => {

        set_senha(event.target.value);
    };

    const handle_confirmar_senha = (event) => {

        set_confirmar_senha(event.target.value);
    };
    
    const handle_button = () => {

        switch(true){

            
        };

        switch(true){

            case senha == confirmar_senha:
            
            senha_valida = true;

            set_mensagem_de_erro(``);

            break;

            default:

            senha_valida = false;

            set_mensagem_de_erro(`As senhas devem ser iguais!`);

            break;
        };
    };

  return (

    <div>

        <h2>Sou uma página de Cadastro! :p</h2>
      
      <div className="aa">
        <label>Nome:</label>
        <input type="text" onChange={handle_nome} required/>
      </div>

      <div className="aa">
        <label>Email:</label>
        <input type="email" onChange={handle_email} required/>
      </div>

      <div className="aa">
        <label>Senha:</label>
        <input type="text" onChange={handle_senha} maxLength={12} required/>
      </div>

      <div className="aa">
        <label>Confirmar Senha:</label>
        <input type="password" onChange={handle_confirmar_senha} maxLength={12} required/>
      </div>

      <button onClick={handle_button}>Cadastrar</button>
      {nome}
      {email}
      {senha}
      {confirmar_senha}
      {mensagem_de_erro}
    </div>
  )
}

export default Cadastro
