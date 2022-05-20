import React from 'react';

export const useLocalStorage = (key, inicial = '') => {

  /**
   * Minha réplica do useStates faz um tratamento antes de setar seu valor inicial
   * Criando uma especie de hosting do useState Original
   */
  const [state, setState] = React.useState( () => {

    const item = window.localStorage.getItem(key);

    return item || inicial;

  });

  React.useEffect( () => {
    window.localStorage.setItem(key, state);
  }, [key,state]);


  return [state,setState];

};