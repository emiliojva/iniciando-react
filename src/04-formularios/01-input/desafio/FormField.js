import React, { Suspense } from "react";

const FormField = ({ id, type, form, setForm, ...props }) => {
  let Component = type.replace(/^[a-z]/, type.charAt(0).toUpperCase());

  switch (type) {
    case "number":
    case "email":
    case "password":
      Component = "Input";
      break;
    default:
      Component = "Input";
      break;
  }

  const DynamicField = React.lazy(() => {
    return import(`./FormFields/${Component}`);
  });

  const handleChangeField = ({ target }) => {
    // startTransition(() => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    // });
  };

  return (
    <>
      <Suspense>
        <DynamicField
          id={id}
          name={id}
          type={type}
          {...props}
          onChange={handleChangeField}
        />
      </Suspense>
    </>
  );
};

export default React.memo(FormField);
