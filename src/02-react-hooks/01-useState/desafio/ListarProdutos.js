import React from 'react'
import Produto from './Produto';
import './styles.css';

export default function ListarProdutos() {

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  /**
   *  Usando função para capturar uma promise de forma convencional
   * Assíncrona
   */
  const handleClick = ({target}) => {

    setLoading(true);

    const produto = target.innerText.toLocaleLowerCase();
    let url = `https://ranekapi.origamid.dev/json/api/produto/${produto}`;

    fetch(url)
    .then( response => response.json() )
    .then( (p) => {
      setDados(p);
      setLoading(false);
    });

  };


  /**
   *  Mesma função acima usando async e await 
   *  Promise em retorno sincronizado
   */
  const handleClickAsync = async ({target}) => {

    setLoading(true);

    const produto = target.innerText.toLocaleLowerCase();
    let url = `https://ranekapi.origamid.dev/json/api/produto/${produto}`;

    const response = await fetch(url);

    const json = await response.json();

    console.log(json);
    setDados(json);
    setLoading(false);

  };
  

  return (
    <div>
      Desafio: <br /><i>Lista Produtos Via Fetch e useState</i>
      <hr />
      <button onClick={handleClickAsync}>Notebook</button> 
      <button onClick={handleClickAsync}>Smartphone</button>
      <button onClick={handleClickAsync}>Tablet</button>

      { dados && <Produto dados={dados} stateLoading={loading}/> }

    </div>
  )
}

