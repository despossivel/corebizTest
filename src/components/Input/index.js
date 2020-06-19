import React, { useEffect, useRef, memo } from "react";
import { useField } from "@unform/core";

import { Container, Input as InputElement, ERROR } from './styles';

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
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <InputElement
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        error={error ? true : false}
        {...rest}
      />
      {error && <ERROR>{error}</ERROR>}
    </Container>
  );
}


export default memo(Input);