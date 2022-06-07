import React from 'react'
import Input from './Input'

const ExemploComponenteInput = () => {

  const [produto, setProduto] = React.useState("");

  return (
    <div>      
      <h1>Componentização - Input</h1>
      <hr />
      <Input 
        // id="produto1"
        label="Produto"
        value={produto} 
        setValue={setProduto} 
      />
    </div>
  )
}

export default ExemploComponenteInput