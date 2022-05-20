import React from 'react'

/**
 * 
 * React.useCallback()
 * https://reactjs.org/docs/hooks-reference.html#usecallback
 * 
 * O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo.
 * Set usa conceito de unicidade de entradas na lista. 
 * Não adiciona item novamente na lista.
 * 
 * Está no escopo global para especular cada mudança de estado e render do app
 */
const set1 = new Set(); 
const set2 = new Set();

const Produto = () => {

  const func1 = () => {
    console.log('func1');
  };

  const func2 = React.useCallback(() => {
    console.log('func2');
  },[]);

  set1.add(func1); // Aplicação cria nova função(object) a cada renderização
  set2.add(func2); // Aplicação usa função armazenada em useCallback(não gera novo objeto)

  console.log('Set1 : ',set1); // vai adicionar nova função na lista
  console.log('Set2 : ',set2); // unicidade

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}


/**
 * React.useMemo()
 * ==============
 */
export default function Exemplo2() {

  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={ () => setContar(contar + 1) }>{contar}</button> 
    </div>
  )
};