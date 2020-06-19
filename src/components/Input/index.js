import React, { useEffect, useRef, memo } from "react";
import { useField } from "@unform/core";

import { Input as InputElement } from './styles';

const Input = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <div>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {error && <span>{error}</span>}
      <InputElement
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        {...rest}
      />
    </div>
  );
}


export default memo(Input);