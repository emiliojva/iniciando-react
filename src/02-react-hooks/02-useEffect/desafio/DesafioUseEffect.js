import React from 'react'
import Produto from './Produto';

/**
 * Componente Montou
 * O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
 * @returns React.Component
 */
export default function DesafioUseEffect() {

  /**
   * Desafio 
   * 
   * 1) Quando o usuário clicar em um dos botões, 
   * faça um fetch do produto clicado utilizando a api abaixo
   *  - https://ranekapi.origamid.dev/json/api/produto/notebook
   *  - https://ranekapi.origamid.dev/json/api/produto/smartphone
   * 
   * 2) Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
   * 3) Defina o produto clicado como uma preferência do usuário no localStorage
   * 4) Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
   * 
   */

   const [produto, setProduto] = React.useState(null);

  /**
   * Effect produzido apenas no primeiro render desse component
   * Valida localStorage(produto) e muda estado do produto com valor encontrado
   */
  React.useEffect( () => {
    const produtoStorage = window.localStorage.getItem('produto');
    if(!!produtoStorage) setProduto(produtoStorage);
  }, []);

  /**
   * Effect produzido se o estado produto for modificado
   * Seta novo valor no localStorage(produto)
   */
  React.useEffect( () => { 
    if(!!produto) window.localStorage.setItem('produto',produto); 
  },[produto]);

  /**
   *  Handle para escutar clicks dos botões 
   */
  const handleClick = ( {target} ) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      
      <div>

        <h1>Preferência: {produto}</h1>
        <Produto produto={produto}/>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

      </div>

      <Sinopse />

      
    </div>
  )
}



const Sinopse = () => {
  return (
    <React.Fragment>
      <hr />
      <i>Desafio<br/></i>
      <ol>
        <li>
          Quando o usuário clicar em um dos botões, 
      faça um fetch do produto, clicado utilizando a api abaixo:
          <ul>
            <li>https://ranekapi.origamid.dev/json/api/produto/notebook</li>
            <li>https://ranekapi.origamid.dev/json/api/produto/smartphone</li>
          </ul>
        </li>

        <li>Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)</li>
        <li>Defina o produto clicado como uma preferência do usuário no localStorage</li>
        <li>Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo</li>
      </ol>
      <hr />
    </React.Fragment>
  )
}