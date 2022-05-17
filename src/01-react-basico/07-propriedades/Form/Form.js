import React from 'react'
import Input from './Input';
import { Button } from './Button'

export const Form = () => {
  const arr = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <React.Fragment>
      <h1>Compomente Formulario</h1>
      <Input type="text"     id="tit"  label="Titulo"   required/>
      <Input type="password" id="pass" label="Password" />
      <Button items={arr}/>
      <hr />
    </React.Fragment>
  )
}

export default Form;
