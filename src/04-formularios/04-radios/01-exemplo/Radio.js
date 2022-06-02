import React from "react";

const Radio = () => {
  const [radio, setRadio] = React.useState("");

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <h1>Input Radios</h1>
      <hr />
      {radio}
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === "tablet"}
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};

export default Radio;
