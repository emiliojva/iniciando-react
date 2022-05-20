import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import {useFetch} from './useFetch';

/**
 * React Custom Hooks 
 * ==============
 */
export default function Exemplo2() {

  const {request, data, loading, error} = useFetch();

  React.useEffect( () => {

    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
      console.log(response,json);
    };
    fetchData();
    
  }, [request]);


  if (error) return <div style={{color: 'red'}}>{error}</div>;

  if(loading) return <div>Loading...</div>;

  if(data === null) return null;
  
  return (
    <div>
      <ul>
      {data.map( (produto) => <li key={produto.id}>{produto.nome}</li>)}
      </ul>
    </div>
  );
  
};