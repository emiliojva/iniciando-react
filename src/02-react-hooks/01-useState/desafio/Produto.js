import React from 'react'

export default function Produto({dados, stateLoading}) {

  return (
    <div>

      { stateLoading && <div>Carregando...</div>}

      {
        (dados && !stateLoading)  && 
        <div >

          <h1>
            {dados.nome}
          </h1>

          <p>R${dados.preco}</p>

          <img src={dados.fotos[0].src} title={dados.fotos[0].titulo} alt={dados.fotos[0].titulo}  />

        </div>
      }

    </div>
  )
}
