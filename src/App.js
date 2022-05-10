import React from 'react';
import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";
import Exemplo3 from "./Exemplo3";


function App() {

  return (
    <React.Fragment> {/* Isso Não gera TAG pai(div,section ...) Adicional no DOM */} 
      <Exemplo3 /> 
      <hr />
      <Exemplo2 />
      <hr />
      <Exemplo1 /> 
    </React.Fragment>
  );
};

export default App;


/**
 * Convencoes 
 * - Return do JSX quando houver quebra de linha ou mais de um elemento necessida do uso de brackets return ( exp... )
 * - O atributos usados nos elementos do JSX são atributos próprios, e não do HTML. Usa-se padrão camelCase. <input className="anythink" />
 * - O Return do component permite apenas uma tag/element pai. Caso queira passar mais de um elemento irmão(siblings), envolva-com outra tag pai. 
 * OU use o compomente fragment do Core React(importe-o) :
 * return <React.fragment> 
 *          <minhasTags/> 
 *          <minhasTags/> 
 *        </React.Fragment>
 *        <!-- vantagem disso: Ele não gera uma tag a mais no DOM. Apenas aplica as tags <minhasTags/> no document. Ele também aceita apenas </>....</>-->
 * 
 * 
 * 
 * -
 * 
 * 
 * 
 */