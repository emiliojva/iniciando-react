import React from 'react';

export const Form = () => {
  const [nome , setNome ]  = React.useState('');
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = ( event ) => {
    event.preventDefault()
    setLoading(true);

    setTimeout(() => {

      /**
       * Simulando retorno de api 
       */
      if(nome === 'teste' && email === 'teste@teste.com')
        console.log({nome: nome, email:email, ok: true});
      else
        console.log({ ok: false});
      
      setLoading(false);
      
    }, 3000)
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && "Carregando..."}
      <label>Nome</label>
      <input 
        id="nome"
        name="nome"
        type="text"
        value={nome}
        onChange={ ({target}) => setNome( target.value ) }
        />
      <i>{nome}</i><br /><br />

      <label>Email</label>
      <input 
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={ ({target}) => setEmail( target.value ) }
        />
        <i>{email}</i><br /><br />

        <button>Enviar</button>
        
    </form>
  );
};

