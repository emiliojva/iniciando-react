import React from 'react'

export default function Produto() {

  React.useEffect( () => {
    function handleScroll(event){
      console.log(event);
    }

    window.addEventListener('scroll',handleScroll);

    // Antes de desmontar efeito executar callback
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }

  }, []);

  return (
    <div style={{ height: '200vh', border: '1px solid black', margin: '10px 0px'}}>
      <p style={{textAlign: 'center'}}>Meu produto</p>
    </div> /* Div com altura = 200% da altura da tela */
  )
}
