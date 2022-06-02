import React from 'react';

export const Form = () => {
  const [form , setForm ]  = React.useState({
    nome: '',
    email: ''
  });
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

    const {id,name} = target;
    
    // let auxObj = {...form};     // auxObj[id] = target.value;     // setForm(auxObj); // Ou
    // Ou, na forma resumida. Dando eval na variavel [id] antes. Desestrutura valor atual do estado form e em seguida altero o campo por id
    setForm({ ...form, [id]: target.value });
    
  }

  return (
    <form onSubmit={handleSubmit}>
      {loading && "Carregando..."}
      <label>Nome</label>
      <input 
        id="nome"
        name="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}
        />
      <i>{form.nome}</i><br /><br />

      <label>Email</label>
      <input 
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        />
        <i>{form.email}</i><br /><br />

        <button ref={btnSubmit}>Enviar</button>
        
    </form>
  );
};

