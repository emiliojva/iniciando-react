import React from 'react'
import Produto from './Produto';
import UserContext from './UserContext';

/**
 * React.createContext()
 * ==============
 */
export default function Exemplo1() {

  // console.log(UserContext);

  return (
    <div>
      <UserContext.Provider value={ {nome: 'Emilio'} }>
        <Produto />
      </UserContext.Provider>
    </div>
  )
};