const objectStyleCSS = {backgroundColor: 'green', padding: '5px', width: '100%', color: '#0E0', margin: '10px 0px'};

const Header = () => {
  return (
    <header style={ objectStyleCSS } >
      <p style={{textAlign: 'center'}}>Header</p>
    </header>
  );
}

const Footer = () => {
  return (
    <footer style={ objectStyleCSS }> 
      <p style={{textAlign: 'center'}}>Todos os direitos reservados.</p>
    </footer>
  );
}

/* 
  - A exportação de um component é imprescídivel para uso de outro component 
  - Neste caso estamos exportando dois componentes. Já que, toda função é interpretada como Component pelo JSX 

*/
export {Header, Footer}; 
