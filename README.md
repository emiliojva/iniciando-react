# React - [Introdução](https://reactjs.org/tutorial)

React é uma biblioteca JavaScript declarativa, eficiente e flexível para construir interfaces de usuário. Ele permite compor interfaces de usuário complexas a partir de pedaços pequenos e isolados de código chamados “componentes”.

O React tem alguns tipos diferentes de componentes, mas começaremos com as subclasses React.Component:

```jsx
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

*Basicamente transformamos códigos complexos em componentes reutilizaveis.*

> fonte: https://reactjs.org/tutorial/tutorial.html#what-is-react

## Requisitos Básicos

- Overview de ES6 - http://es6-features.org/
- Compreensão básica de arrow functions, spread, assign destruction e types.

## Backgrounds (Locais para teste rápido)
- https://codepen.io
- https://babeljs.io/repl#



## Hello World (Sem NPM e Webpack)

Para uso direto em uma página estática HTML, precisamos incluir no head:
- react.js
- react-dom.js
- babel.min.js (para uso do JSX)


```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
```

A página HTML 5 precisa do básico. html, head e script.

```html
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React - Hello World Add Website (no NPM)</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
  </head>
  <body>
    <div id="app">App</div>
    <script type="text/babel">
      function App() {
        return <div>Meu Primeiro App <b>React</b>! <p>Adicionado diretamente no website (sem uso do NPM/webPack)</p></div>;
      }

      ReactDOM.render(<App />, document.getElementById('app'));
    </script>
  </body>
  </html>
```  

São essenciais para uso básico do React.  Além disso a tag script usará um tipo especial

```html
<script type="text/babel">
```

## Babel (JSX)
Babel é uma cadeia de ferramentas que é usada principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript em navegadores ou ambientes atuais e mais antigos. Aqui estão as principais coisas que o Babel pode fazer por você:

-   Sintaxe de transformação
-    Recursos de polyfill que estão faltando em seu ambiente de destino (por meio de um polyfill de terceiros, como core-js)
-    Transformações de código-fonte (codemods)

Uso do Babel irá fazer total sentido para o JSX (JotaÉsexy rs) ser mais fluente.
https://babeljs.io/docs/en/#jsx-and-react


> Resumindo: **Babel*

    Transforma JSX return <div></div> em funções de React React.createElement()

    Transforma JavaScript novo const em JavaScript antigo var

    https://babeljs.io/





### JSX em ação
O uso do JSX com React só é possível devido ao `Babel`.
Ele converte/Transpila a forma convencional escrita em HTML para métodos fluentes ao entendimento do React. 


```jsx
import React from 'react';

const AnchorWithReactJSX = () => {
  /**
    * Com Babel 
    */
    return <a href="http://www.inovuerj.sr2.uerj.br">Anchor Link with React JSX</a>;
};

export default AnchorWithReactJSX;
```

Será convertido com JSX para : 
	
```javascript 
/**
  * Sem Babel 
  */
return React.createElement(
  'a',
  { href: 'http://www.inovuerj.sr2.uerj.br"' },
  'Anchor Link with React Method createElement()',
);
```

## Webpack

Webpack

    Agrupa (bundle) o código do seu aplicativo

    Permite definirmos os componentes em diferentes arquivos para melhor organização

    Facilita a importação de código externo instalado via NPM

    https://webpack.js.org/


## React Basico 

Nos próximos exemplos, vamos sempre abstrair o `html` do nosso `helloWorld`, mudando apenas o conteudo dentro da tag `script>`.

### Componentização (Composição)

Uma das  propostas do react é dividir no template/html em componentes.
tem um bom exemplo de componentização em react no codigo abaixo:

```jsx
<script type="text/babel">

  const Button = () => {
    return <button>Comprar</button>
  };

  const MainNav = () => {
    return (
      <nav>
          <a href="#">Link 1</a>
          <Button />
      </nav>
    )
  };
  
  function App() {
    return (
      <div>
        <MainNav />
      </div>
    ) ;
    
  }

  ReactDOM.render(<App />, document.getElementById('app'));
</script>
```
*Repare como temos uma função(component react) de nome `App` que abraça uma outra tag `MainNav` que também é um outro component(função react)* 



### Events

Eventos consistem em dar dinamica ao componente que ele integra.
exemplo de um componente que atualiza o titulo com valor aleatório.

```jsx
 <div id="app">App</div>

  <script type="text/babel">

    const Button = () => {

      function handleClick(event){
        console.log("Comprou " + event.target.innerText);
      };
      
      return <button onClick={handleClick}>Comprar <Titulo /></button>
    };

    const Titulo = () => {
      const numero = Math.random() * 1000;
      return <h1>Meu título {numero}</h1>;
    }

    function App() {

      return (
        <div>
          <Titulo />
          <Button />
        </div>
      );
      
    }

    ReactDOM.render(<App />, document.getElementById('app'));

  </script>const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(App());
```


### Hooks

Aplicativos com javascript precisam de um gatilho para dizer que algo mudou. Exemplo quando um ajax é feito. Para isso, react se utiliza de comando `React.useState` para renovar o valor de um estado. O exemplo abaixo cria um contador, que a cada clique no botão `comprar` gera reatividade multiplicando  quantidade * valor da compra (R$250).

```jsx
<script type="text/babel">

  const Compras = () => {
    
    /**
     * Uso default de uma hook para sinalizar mudança de estados. 
     * const contador = React.useState(0);
     * returns [o valor passado, function dispatchAction()]
     * 
     * podemos usar http://es6-features.org/#ArrayMatching para desestruturar melhor
     */ 
    const [contador, setContador] = React.useState(0);

    function comprar() {
      setContador(contador + 1);
    }

    console.log(contador,setContador);

    return (
      <div>
        <button onClick={comprar}>Comprar</button> 
        <p>Total: {contador}</p>
        <p>Preço: R$ {contador * 250}</p>
      </div>
    );

  };

  function App() {

    return (
      <div>
        <Compras />
      </div>
    );
    
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  
</script>
```

## Convenções

O método `ReactDOM.Render` só permite retornar uma tag principal(parent). Precisamos envolver com uma tag pai quando queremos retornar blocos de html. Conforme exemplo acima que possui uma tag `div` abraçando `<Compras />`

```jsx
return (
  <div>
    <Compras />
    <Vendas />
    <input type="text" />
  </div>
);
```

> Written with [StackEdit](https://stackedit.io/).
