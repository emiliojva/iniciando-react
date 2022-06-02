import React from "react";

const Checkbox = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <div>
      <h1>Checkbox</h1>
      <hr />

      <form>
        <label>
          {termos && "Aceito!"}
          <input
            type="checkbox"
            name="termos"
            value={termos}
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceito os termos
        </label>
      </form>
    </div>
  );
};

export default Checkbox;
