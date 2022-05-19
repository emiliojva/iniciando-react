import React from 'react'
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

/**
 * React.createContext()
 * React.useContext()
 * ==============
 */
export default function Exemplo2() {


  return (
    <div>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </div>
  )
};