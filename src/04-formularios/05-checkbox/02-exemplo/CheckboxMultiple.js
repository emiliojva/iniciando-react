import React from "react";

const CheckboxMultiple = () => {
  const [cores, setCores] = React.useState(["verde"]);

  const handleChange = ({ target }) => {
    let result;
    if (target.checked) {
      result = [...cores, target.value];
    } else {
      // const index = cores.findIndex((item) => item === target.value);
      // cores.splice(index, 1);
      result = cores.filter((item) => item !== target.value);
    }

    console.log("target", target);
    setCores(result);
  };

  return (
    <div>
      <h1>Checkbox Multiplas</h1>
      <hr />

      <form>
        <ul>{cores && cores.map((cor) => <li key={cor}>{cor}</li>)}</ul>

        <label>
          <input
            type="checkbox"
            name="cores"
            value="verde"
            onChange={handleChange}
            checked={cores.includes("verde")}
          />
          Verde
        </label>
        <label>
          <input
            type="checkbox"
            name="cores"
            value="roxa"
            onChange={handleChange}
            checked={cores.includes("roxa")}
          />
          Roxa
        </label>
        <label>
          <input
            type="checkbox"
            name="cores"
            value="azul"
            onChange={handleChange}
            checked={cores.includes("azul")}
          />
          Azul
        </label>
      </form>
    </div>
  );
};

export default CheckboxMultiple;
