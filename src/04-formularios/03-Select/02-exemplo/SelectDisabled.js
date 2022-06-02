import React from "react";

const items = [
  { label: "Item 1", value: "item1" },
  { label: "Item 2", value: "item2" },
  { label: "Item 3", value: "item3" },
];

const SelectDisabled = () => {
  // const [item, setItem] = React.useState(null); // selecione
  const [item, setItem] = React.useState("item2"); // Setar um valor especifico

  return (
    <div>
      Select
      <form>
        <select value={item} onChange={({ target }) => setItem(target.value)}>
          <option disabled>Selecione</option>
          {items &&
            items.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
        </select>
        {item}
      </form>
    </div>
  );
};

export default SelectDisabled;
