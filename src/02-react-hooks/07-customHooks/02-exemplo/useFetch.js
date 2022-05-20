import React from 'react';

export const useFetch = () => {

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  /**
   * Cria uma função memorizada
   * 
   * Passe um callback embutido e um array de dependências. 
   * useCallback retornará uma versão memorizada do callback 
   * Ele só muda se uma das dependências for alterada. 
   * Isso é útil ao passar callbacks para componentes filhos otimizados 
   * que dependem da igualdade de referência para evitar renderizações desnecessárias 
   * (por exemplo, shouldComponentUpdate).
   */
  const request = React.useCallback( async (url, options = {}) => {

    let response, json = null;

    setLoading(true);

    try {
      response  = await fetch(url, options);
      json      = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setData(json);
      setLoading(false);
      return {response, json}
    }

    
  }, [setData,setLoading, setError]);


  return {request, data, loading, error};

}