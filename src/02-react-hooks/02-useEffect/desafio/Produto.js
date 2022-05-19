import React from 'react'

export default function Produto( {produto} ) {

  const [dados, setDados] = React.useState(null);


  const request = async (nome_do_produto) => {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nome_do_produto}`);
    const json = await response.json();
    setDados(json);
  };


  React.useEffect( () => {

    if(!!produto){
      request(produto);
    }

  }, [produto]);


  if(dados === null) return null;

  return (
    <div>Produto
      <p>Nome: {dados.nome}</p>
      <p>Preço: R${dados.preco}</p>
    </div>
  )
}
