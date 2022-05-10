import React from "react";

function Exemplo3(){

  const texto   = "Isso é um titulo";
  const funcaoMostrarNome  = (sobrenome) => {
    return 'React ' + sobrenome;
  };
  const objetoCarro = {
    marca: 'Ford',
    rodas: 4
  };

  /**
   * Isso é um literal object javascript. Isso não é CSS
   */
  const estilo = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica'
  };
  
  return (
    <React.Fragment> {/* Parent. Poderia ser uma tag(div,section) ou </></>; Dessa forma não gera tag no DOM */}
      <h1>Interpolações de Tipos: string, boolean, functions, objects e etc.</h1>

      {texto}
      <p>
        Boolean <br />
        {true}
        {true ? 'true' : 'false'}
      </p>
      <p>
        {funcaoMostrarNome(' Expressions')}
      </p>
      <p>{new Date().getFullYear()}</p>
      <p style={ {color:'red'} }>{objetoCarro.marca}</p>
      <h1 style={ estilo }>Teste de Estilos com objetos literais no React JSX.</h1>
    </React.Fragment>
  );
}

export default Exemplo3;

/**
 * trabalhar com estilos no react precisa seguir uma convenção de objetos {}
 * As propriedades sãod e um objeto e portanto precisam usar camelCase
 * Em estilos inline passamos um objeto {} para a interpolação. Ou seja: { {color:'red'} }
 * 
 */