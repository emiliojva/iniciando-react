import React from 'react';


const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const clientes = [luana, mario]

function Exercicio1(){

  const compra = clientes[1]; // alterar entre os clientes 0 e 1 
  const total  =  compra.compras 
    .map( ({preco}) => Number(preco.replace('R$','')) )
    .reduce( (previousValue, nextValue) => previousValue + nextValue ) // pegar o somatorio de todos os preços

  return (
    <React.Fragment>
      
      <div>
        <div>nome   : {compra.cliente}</div>
        <div>idade  : {compra.idade}</div>
        <div>Situação  : <span style={ { color: compra.ativa ? 'green' : 'red' } }>{compra.ativa ? "Ativa" : "Inativa"}</span></div>
        <div>
          <ul>
            { 
              compra.compras.map( ( {nome,  preco}) => {
                return <li >{nome + ' ' + preco}</li> 
              }) 
            }
          </ul>
        </div>
      </div>
      { total > 10000 && <p>Seu gasto superou R$10000</p> }
      
    </React.Fragment>
  );
}

export default Exercicio1;