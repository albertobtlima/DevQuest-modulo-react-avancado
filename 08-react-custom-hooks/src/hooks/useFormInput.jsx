import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleNameChange(event) {
    setValue(event.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleNameChange,
  };

  return inputProps;
}
