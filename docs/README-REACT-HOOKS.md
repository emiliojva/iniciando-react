# React Hooks- [Introdução](https://reactjs.org/docs/hooks-intro.html)

Hooks são funções que permitem que os desenvolvedores "se conectem" aos recursos de estado e ciclo de vida do React a partir de componentes de função. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes.

O React fornece alguns hooks internos como:

- useState
- useContext
- useReducer 
- useMemo 
- useEffect 

***Outros estão documentados na Referência da API Hooks. useState e useEffect, que são os mais usados, são para controlar o estado e os efeitos colaterais, respectivamente.***

***



O React tem alguns tipos diferentes de componentes, mas começaremos com as subclasses React.Component:

```jsx

```

*Basicamente transformamos códigos complexos em componentes reutilizaveis.*

> fonte: https://reactjs.org/tutorial/tutorial.html#what-is-react


> Resumindo: ***

***


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

***

## React.useState
O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

  ```jsx
  import React from 'react'

  export default function Exemplo2() {

    /**
     * Hook useState
     * 
     * Monitora o valor de um estado 
     * 
     * Retorno
     * Forma real do RETORNO useState é um array com: 
     *  "valor do estado" - Valor real do estado. Manipulavel pelo callback 'dispatchSetState'
     *  "função dispatchSetState()" - callback para mudar o valor do estado
     * 
     */
    const btnState = React.useState(false);
    const btnStateValue = btnState[0];
    const btnStateDispatch = btnState[1];
    console.log(btnStateValue,btnStateDispatch);


    /**
     * A mesma coisa de cima usando desestruturação(destructuring assignment)
     * Linguagem mais resumida e funcional 
     * 
     * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
     */
    const {btnValue, setBtnValue} = React.useState(false);
    console.log(btnValue,setBtnValue);

    return (
      <button onClick={ () => { btnStateDispatch(!btnStateValue); } }>Button</button>
    )
  }
  ```

***

  ### Desafio 

    // Os links abaixo puxam dados de um produto em formato JSON
    // https://ranekapi.origamid.dev/json/api/produto/tablet
    // https://ranekapi.origamid.dev/json/api/produto/smartphone
    // https://ranekapi.origamid.dev/json/api/produto/notebook
    // Crie uma interface com 3 botões, um para cada produto.
    // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
    // Mostre apenas um produto por vez
    // Mostre a mensagem carregando... enquanto o fetch é realizado


#### Exercício Solução

```jsx
import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
```

#### Produto.js


```jsx
import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
```




***


## React Hooks - useEffect

> **useEffect**

  Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  });

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

***

### Array de Dependências

No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0);
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

***

### Dependências Obrigatórias

Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0);

  const titulo = 'Clicou ';

  React.useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

***

## Desafio


    // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
    // https://ranekapi.origamid.dev/json/api/produto/notebook
    // https://ranekapi.origamid.dev/json/api/produto/smartphone
    // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
    // Defina o produto clicado como uma preferência do usuário no localStorage
    // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

#### Exercício Solução

##### App.js

```jsx
import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
```

##### Produto.js

```jsx
import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
```

***

## React.useRef()

useRef

Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

```jsx
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  return <video ref={video}></video>;
```

***

#### focus()
É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

```jsx
const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};
```

***

#### Referência
O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};
```


***

## React.useMemo()

useMemo
Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, []);
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
```

*Serve para casos em que você faz uma operação lenta para retornar um valor.*


***

####useMemo Teste

```jsx
function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
```

***

## React.useCallback()

##### useCallback
Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return <button onClick={handleClick}>{contar}</button>;
};
```
>*Dificilmente você irá encontrar um cenário em que essa função seja útil*

***

##### useCallback Teste
Uma prova de que o useCallback não irá criar uma nova função. Isso não significa que ele é mais ou menos otimizado. O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo.

```jsx
const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
```

***


## React.useContext e React.createContext

###### createContext
O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

###### UserContext.js

```jsx
import React from 'react';

const UserContext = React.createContext();

export default UserContext;
```


###### Provider
O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto.


##### App.js

```jsx
import React from 'react';
import Produto from './Produto';
import UserContext from './UserContext';

const App = () => {
  return (
    <UserContext.Provider value={{ nome: 'André' }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default App;
```


##### useContext
O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.

##### Produto.js

```jsx
import React from 'react';
import UserContext from './UserContext';

const Produto = () => {
  const user = React.useContext(UserContext);

  return <p>Produto de: {user.nome}</p>;
};

export default Produto;
```

***

### GlobalStorage
Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadoras do useState.

##### App.js

```jsx
import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
```

##### GlobalStorage.js

```jsx
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
```

##### Produto.js


```jsx
import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};


export default Produto;
```

##### Exercício

```jsx

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
```

##### Exercício Solução

```jsx
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparDados() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
```

---

## Regras de hooks

Existem regras de hooks que descrevem o padrão de código característico em que os hooks dependem. É a maneira moderna de lidar com o estado com o React. Hooks só devem ser chamados no nível superior (não dentro de loops ou instruções if). Hooks só devem ser chamados de componentes de função React e hooks customizados, não funções normais ou componentes de classe.

Embora essas regras não possam ser aplicadas em tempo de execução, ferramentas de análise de código, como linters, podem ser configuradas para detectar muitos erros durante o desenvolvimento. As regras aplicam-se tanto ao uso de hooks quanto à implementação de hooks personalizados, que podem chamar outros hooks.



> Written with [StackEdit](https://stackedit.io/).


