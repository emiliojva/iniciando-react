import React from 'react'; //  React Core
import Form from './Form/Form';

const styles = {
  hide: { display: 'none' }
}

const Titulo = ( {children, texto, cor} ) => { // desestruturação de props em {...props}
  return (
    <h1 style={ {color: cor} }>
      {texto} 
      {children && <ul style={ {marginLeft:'1rem'} }>{children}</ul>} 
    </h1>
  );
};

/**
 * Exemplo 1 - Básico de propriedades e o poder de multiplas instancias
 * https://reactjs.org/docs/components-and-props.html#function-and-class-components
 */
const Exemplo1 = () => {
  return (
    <div>
      <Titulo texto="Meu titulo 1" />
      <Titulo texto="Meu titulo 2" />
      <Titulo texto="Meu titulo 3" />
      <hr />
    </div>
  );
};

/**
 *  Exemplo2 - Multiplas propriedades e desestruturação (destructuring assignment)
 * https://javascript.info/destructuring-assignment
 */
const Exemplo2 = (props) => {
  return (
    <React.Fragment>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título"  cor="red"  />
      <hr />
    </React.Fragment>
  )
};


/**
 *  Exemplo3 - Chidren. Capturando nós(elementos) filhos dentro de um component react
 */
 const Exemplo3 = (props) => {
  return (
    <React.Fragment>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red">
        <li>SubTítulo1</li>
        <li>SubTítulo2</li>
      </Titulo>
      <hr />
    </React.Fragment>
  )
}

const Propriedades = () => {
  return (
    <React.Fragment>
      <Form />
      <Exemplo3 />
      <Exemplo2 />
      <Exemplo1 />    
    </React.Fragment>
  )
}

export default Propriedades;