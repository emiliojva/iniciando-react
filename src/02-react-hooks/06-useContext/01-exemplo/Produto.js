import React from 'react'
import UserContext from './UserContext';

export default function Produto() {

  const user = React.useContext(UserContext); // usa valor passado em value do provider
  console.log(user);

  return (
    <div>
      <p>Produto do Usuário: <i>{user.nome}</i></p>
    </div>
  )
}
