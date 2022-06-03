import React from "react";

const CheckboxMultipleOp = () => {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  const [cores, setCores] = React.useState(["verde", "cinza"]);

  const handleChange = ({ target }) => {
    let result;
    if (target.checked) {
      result = [...cores, target.value];
    } else {
      result = cores.filter((item) => item !== target.value);
    }
    setCores(result);
  };

  return (
    <div>
      <h1>Checkbox Multiplas</h1>
      <hr />

      <form>
        <div>
          Cores default
          <ul>{cores && cores.map((cor) => <li key={cor}>{cor}</li>)}</ul>
        </div>
        {coresArray &&
          coresArray.map((cor) => (
            <label key={cor} style={{ textTransform: "capitalize" }}>
              <input
                type="checkbox"
                name="cores"
                value={cor}
                onChange={handleChange}
                checked={cores.includes(cor)}
              />
              {cor}
            </label>
          ))}
      </form>
    </div>
  );
};

export default CheckboxMultipleOp;
