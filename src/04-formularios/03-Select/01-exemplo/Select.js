import React from "react";

const items = [
  { label: "Item 1", value: "item1" },
  { label: "Item 2", value: "item2" },
  { label: "Item 3", value: "item3" },
];

const Select = () => {
  const [item, setItem] = React.useState(null);

  return (
    <div>
      Select
      <form>
        <select onChange={({ target }) => setItem(target.value)}>
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

export default Select;
