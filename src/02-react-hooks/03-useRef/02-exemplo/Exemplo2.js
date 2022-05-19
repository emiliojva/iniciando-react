import React from 'react'

/**
 * React.useRef() 
 * ==============
 * 
 * É comum utilizarmos em formulários, 
 * quando precisamos de uma referência do elemento 
 * para colocarmos o mesmo em foco.
 */
export default function Exemplo2() {

  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  const handleClick = () => {
    setComentarios([input].concat(comentarios)); // ou setComentarios([...comentarios,input])
    setInput('');
    inputElement.current.focus();
  };

  return (
    <div>
      Exemplo2

      <ul>
        { comentarios.map( (comentario) => <li key={comentario}>{comentario}</li> )}
      </ul>

      <input value={input} onChange={( {target} ) => setInput(target.value)} ref={inputElement}/> <br />
      {input}<br />
      {JSON.stringify(comentarios)}<br />

      <button onClick={handleClick}>Enviar</button>

    </div>
  )
}