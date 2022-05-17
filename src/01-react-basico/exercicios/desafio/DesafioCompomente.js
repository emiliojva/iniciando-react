import React from 'react'



export const DesafioCompomente = () => {
  
  /**
   * Returna um compoment de acordo com o pathname do location "/" ou "produtos"
   * p.s: Tudo isso por que ainda não fomos apresentados ao react router
   * @param {*} page 
   * @returns 
   */
  const renderize = () => {
    const { pathname } = window.location; // rota atual por meio de desestruturação do location
    let page = pathname.replace(/^\//,''); // remove barra do inicio, caso venha
    page = "Page"+ ( page ? page.replace(/^[a-z]/ , page.slice(0,1).toUpperCase()) : 'Home'); // transforma em Page{Componente}
    const componentFunction = eval(page); // execução dinamica de função
    
    return componentFunction;
  }

  let Component = renderize();

  /**
   * Forma simple e direta seria como abaixo 
   */
  /*
  if (pathname === '/produtos') {
    Component = PageProdutos;
  } else {
    Component = PageHome;
  }
  */
  
  return (
    <div>
      <Component /> {/* O mesmo que = <PageHome /> ou <PageProdutos /> mas dinamicamente */}
    </div>
  )
};

const PageHome = () => {
  return (
    <div>
      <Titulo texto="Home" />
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/produtos'>Produtos</a></li>
      </ul>
    </div>
  )
};


const PageProdutos = () => {
  /**
   * Array de objectos com produtos
   */
  const produtos = [
    { nome: 'Notebook', propriedades:   ['16gb ram' , '512gb']},
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'  ]},
  ];

  return (
    <div>
      <Titulo texto="Produtos" />
      <section>
          { produtos.map( (produto) => <Produto key={produto.nome} dados={produto}/> ) }
          {/* <Produto></Produto> */}
          {/* <Produto></Produto> */}
      </section>
      <a href="/">Home</a>
    </div>
  );
};



const Produto = ({dados}) => {

  const {nome,propriedades} = dados;
  
  return (
    <div style={{padding: '10px', border: '1px solid black', margin: '10px 0px'}}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map( (item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

const Titulo = (props) => {
  return <h1 style={{ color: '#4c8b64' }}>{props.texto}</h1>;
};

export default Titulo;




