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


## Plano de Voo para aprendizado
> 1. [ES6 - Javascript](/docs/README-ES6.md)
> 2. [React Básico](/docs/README-REACT-BASICO.md)

<hr>

[Readme/Repositorio](/docs/README-DEFAULT.md)

