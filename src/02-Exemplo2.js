import React from "react";

function Exemplo2(){
  const name = "Fulano";
  const random = Math.random();
  const ativo = true;
  return (
    <React.Fragment> {/* Parent. Poderia ser uma tag(div,section) ou </></>; Dessa forma não gera tag no DOM */}
      <h1>Interpolações de variaveis e constantes</h1>
      <div>Name: {name} </div>
      <div>Random: {random}</div>
      <label htmlFor='inputThink'>Form</label> {/* As propriedades do JSX seguem sua própria convenção. Não seguinto completamente as especificação de nomes do HTML */}
      <input id="inputThink" value={random}/> {/* Não utilize aspas nas propriedades. Na verdade elas lidam com expressões javascripts(funcoes,objetos e etc com uso da interpolação {}) */}
      <p className={ativo ? 'ativo':'inativo'}>{random * 1000 / 50}</p> {/* Uso de um ternário dentro de uma propriedade. Repare que JSX não necessita de aspas. Visto que ele trabalha com expressões JS e propriedades embutidas */}
    </React.Fragment>
  );
}

export default Exemplo2;