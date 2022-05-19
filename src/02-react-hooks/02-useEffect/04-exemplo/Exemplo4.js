import React from 'react'
import Produto from './Produto';

/**
 * Componente Montou
 * O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
 * @returns React.Component
 */
export default function Exemplo4() {

  const [ativo, setAtivo] = React.useState(false);

  /**
   * Exemplo 3 - Múltiplos Efeitos 
   * 
   * Podemos ter diversos useEffect no nosso código. 
   * O ideal é separarmos efeitos diferentes em useEffect diferentes.
   */
  React.useEffect( () => {
  }, []);

  return (
    <div>
      <i>Exemplo4 - Antes de Desmontar<br/><br/>
As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.</i>
      <hr />

      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>{ativo ?'Fechar':'Abrir'}</button>
    </div>
  )
}
