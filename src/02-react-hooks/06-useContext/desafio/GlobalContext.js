import React, { Children } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ( {children} ) => {

  const [produtos, setProdutos] = React.useState([]);

  React.useEffect( () => {

    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then( response => response.json() )
    .then( produtosList => {
      setProdutos(produtosList)
      console.log('Consumindo produtos da api e alterando estado de produtos...');
    });

    

  },[]);

  const limpar = () => {
    setProdutos([]);
  };

  

  return (
    <GlobalContext.Provider value={ {produtos,limpar} }>
      {children}
    </GlobalContext.Provider>
  )
};