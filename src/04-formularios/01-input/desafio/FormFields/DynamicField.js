import React from "react";
import Button from "./Button";
import Input from "./Input";

const DynamicField = ({ attributes, setForm, form, ...props }) => {
  const handleChangeField = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <>
      {/* Input */}
      {["text", "password", "number", "email"].includes(attributes.type) && (
        <Input {...attributes} {...props} onChange={handleChangeField} />
      )}

      {/* Select */}

      {/* Radio */}

      {/* Checkbox */}

      {/* Button */}
      {["button", "submit", "reset"].includes(attributes.type) && (
        <Button {...attributes} {...props}>
          {attributes.label}
        </Button>
      )}
    </>
  );
};

export default DynamicField;
