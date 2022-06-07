import React from 'react';

const formFields = [
  {id: 'nome', label:'Nome', type: 'text'},
  {id: 'email', label:'Email', type: 'email'},
  {id: 'numero', label:'Número', type: 'number'},
  {id: 'bairro', label:'Bairro', type: 'text'},
  {id: 'cidade', label:'Cidade', type: 'text'},
  {id: 'estado', label:'Estado', type: 'text'},
];

/**
 * Função reduce não ser apenas para totalizar
 * Diferente de map e filter que retoram SEMPRE um array. 
 * Reduce pode ser "REDUZIDO" ao que você mandar no return, que será empilhado
 */
 const stateInitialForm = formFields.reduce( (acumulador, field) => {
  return {...acumulador, [field.id]: ''}; // o valor objeto anterior será desestruturado e adicionará um novo campo junto, com base no valor do ID
},{}); // currentValue(o primeiro valor do acumulador será {} )



export const Form = () => {



  const [form , setForm ]  = React.useState(stateInitialForm); // agora meu valor inicial é dinamico de acordo com objeto formFields

  const [loading, setLoading] = React.useState(false);
  const btnSubmit = React.useRef();

  const handleSubmit = ( event ) => {
    event.preventDefault()
    setLoading(true);
    btnSubmit.current.setAttribute('disabled',true);

    setTimeout(() => {
      setLoading(false);
      console.log(form);
      btnSubmit.current.removeAttribute('disabled');
    }, 2000)
    
  };

  const handleChange = ({target}) => {

    const {id} = target;
    
    // let auxObj = {...form};     // auxObj[id] = target.value;     // setForm(auxObj); // Ou
    // Ou, na forma resumida. Dando eval na variavel [id] antes. Desestrutura valor atual do estado form e em seguida altero o campo por id
    setForm({ ...form, [id]: target.value });
    
  }

  return (
    <form onSubmit={handleSubmit}>
      {loading && "Carregando..."}

      {formFields.map( ({id,label,type}) => {
        return(
          <fieldset key={id}>
            
            {/* <label>{label}</label> */}
            <legend htmlFor={id} onClick={ ({target}) => target.nextElementSibling.focus() }>{label}</legend>
            <input 
              id={id}
              name={id}
              type={type}
              value={form[id]}
              onChange={handleChange}
              />
            <i>{form[id]}</i><br /><br />
          </fieldset>
        );

      })}

      <button ref={btnSubmit}>Enviar</button>
        
    </form>
  );
};

