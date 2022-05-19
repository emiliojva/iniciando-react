import React from 'react'

/**
 * React.useRef()
 * ==============
 * Retorna um objeto com a propriedade current. 
 * Esse objeto pode ser utilizado para guardarmos valores. 
 * Este persistirá durante todo o ciclo de vida do elemento. 
 * Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, 
 * Sem precisarmos utilizar o querySelector ou similar.
 */
export default function Exemplo1() {

  const video = React.useRef();

  console.log(video.current); /// aqui o render DOM não foi completado. Retorna null
  
  // O useEffect é montado quando o renderDOM foi finalizado. 
  React.useEffect(() => { 
    console.log(video.current); // retorna o querySelector do video com auxilio da prop 'ref' na tag/componente
    
    const { currentTime } = video.current;
    console.log(currentTime); // Posição do video com a propriedade do objeto video (currentTime)
  });

  return (
    <div>
      Exemplo1
      <video style={{ border: '1px solid black'}} ref={video}></video>
      
    </div>
  )
}