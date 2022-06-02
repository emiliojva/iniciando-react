import React from "react";

const Textarea = () => {
  const [mensagem, setMensagem] = React.useState(null);

  return (
    <div>
      <form>
        <textarea
          value={mensagem}
          onChange={({ target }) => setMensagem(target.value)}
          rows="10"
        />
        {mensagem}
      </form>
    </div>
  );
};

export default Textarea;
