import React from 'react'

export default function Exemplo1() {

  const [contar, setContar] = React.useState(0);

  /**
   * Esse effect sem dependencias só executa na primeira renderização
   */
  React.useEffect( () => {
    console.log('executou effect unica vez')
  }, []);

  
  /**
   * Esse effect monitora a dependencia 'contar' sendo acionado sempre que o valor mudar
   */
  React.useEffect( () => {
    console.log(`executou effect porque 'contar' ${contar} mudou valor`);
    document.title = `Total' + ${contar}`;
  }, [contar]);


  return (
    <>
      <i>Exemplo1 - Hook UseEffect é acionado apenas um vez, ou quando uma dependencia state é modificada</i>
      <hr />
      <div>
        <button onClick={ () => setContar(contar + 1)} >{contar}</button>
      </div>
    </>

  )
}
