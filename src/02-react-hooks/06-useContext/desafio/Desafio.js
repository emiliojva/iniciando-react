import React from 'react'
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';
import LimparProdutos from './LimparProdutos';

/**
 * React.createContext()
 * React.useContext()
 * ==============
 */
export default function Desafio() {


  return (
    <div>
      <GlobalStorage>
        <Produto />
        <LimparProdutos />
      </GlobalStorage>
    </div>
  )
};