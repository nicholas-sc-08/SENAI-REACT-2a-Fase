import { useState } from "react"
function Velocidade_da_luz() {
    
    const [valor_de_velocidade, set_valor_de_velocidade] = useState();

function calcular_velocidade(){



    
    const valor_da_velocidade_da_luz = 300000;
    let distancia_do_usuario;
    let tempo_em_segundos_da_viagem;
    let segundos_por_minuto = 60;
    let segundos_por_hora = segundos_por_minuto ** 2;
    let segundos_por_dia = segundos_por_hora * 24;
    let segundos_por_mes = segundos_por_dia * 30;
    let segundos_por_ano = segundos_por_mes * 12;
    let conversao_de_tempo_em_minuto;
    let conversao_de_tempo_em_hora;
    let conversao_de_tempo_em_dias;
    let conversao_de_tempo_em_mes;
    let conversao_de_tempo_em_ano;
    distancia_do_usuario = parseFloat(prompt(`Informe qual a distância em km/s para seu destino.`));
    
    tempo_em_segundos_da_viagem = distancia_do_usuario / valor_da_velocidade_da_luz;
    
    conversao_de_tempo_em_minuto = tempo_em_segundos_da_viagem / segundos_por_minuto;
    conversao_de_tempo_em_hora = conversao_de_tempo_em_minuto / segundos_por_minuto;
    conversao_de_tempo_em_dias = conversao_de_tempo_em_hora / 24;
    conversao_de_tempo_em_mes = conversao_de_tempo_em_dias / 30;
    conversao_de_tempo_em_ano = conversao_de_tempo_em_mes / 12;
    
    
    if(tempo_em_segundos_da_viagem > segundos_por_minuto){
    
        set_valor_de_velocidade(`Velocidade em ${conversao_de_tempo_em_minuto.toFixed(2)} Minutos;`);
    
    } else if(tempo_em_segundos_da_viagem > segundos_por_hora){
    
        set_valor_de_velocidade(`Velocidade em ${conversao_de_tempo_em_hora.toFixed(2)} Horas;`);
    
    } else if(tempo_em_segundos_da_viagem > segundos_por_dia){
    
        set_valor_de_velocidade(`Velocidade em ${conversao_de_tempo_em_dias.toFixed(0)} Dias;`);
    
    } else if(tempo_em_segundos_da_viagem > segundos_por_mes){
    
        set_valor_de_velocidade(`Velocidade em ${conversao_de_tempo_em_mes.toFixed(0)} Meses;`);
    
    } else if(tempo_em_segundos_da_viagem > segundos_por_ano){
    
        set_valor_de_velocidade(`Velocidade em ${conversao_de_tempo_em_ano.toFixed(0)} Anos;`);
    
    } else {
    
        set_valor_de_velocidade(`Velocidade em ${tempo_em_segundos_da_viagem.toFixed(2)} segundos;`);
    
    };
};



  return (
    <div>
      
      <h2>SW</h2>

    <button onClick={calcular_velocidade}>Calcular</button>

    {valor_de_velocidade};
    
    </div>
  )
}

export default Velocidade_da_luz
