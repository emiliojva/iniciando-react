function Eventos() {

  function handleEvent(event) {
    console.log(event.target);
  }

  window.addEventListener("scroll", handleEvent);


  return (
    <div style={ {height: '200vh'} }>
      <button onClick={ (event) =>console.log(event.target.innerText) } onMouseOut={handleEvent} >Clique</button>
    </div>
  )
}

export default Eventos;