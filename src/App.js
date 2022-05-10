import React from 'react';
import Exemplo1 from "./Exemplo1";


function App() {
  return (
    // <React.Fragment> <!-- Isso Não gera TAG Adicional no DOM -->
      <div>
        <Exemplo1 />  
      </div>
    // </React.Fragment>
  );
};

export default App;


/**
 * Convenvoes 
 * - Return do JSX quando houver quebra de linha ou mais de um elemento necessida do uso de brackets return ( exp... )
 * - O atributos usados nos elementos do JSX são atributos próprios, e não do HTML. Usa-se padrão camelCase. <input className="anythink" />
 * - O Return do component permite apenas uma tag/element pai. Caso queira passar mais de um elemento irmão(siblings), envolva-com outra tag pai. 
 * OU use o compomente fragment do Core React(importe-o) :
 * return <React.fragment> 
 *          <minhasTags/> 
 *          <minhasTags/> 
 *        </React.Fragment>
 *        <!-- vantagem disso: Ele não gera uma tag a mais no DOM. Apenas aplica as tags <minhasTags/> no document. -->
 * -
 * 
 * 
 * 
 */