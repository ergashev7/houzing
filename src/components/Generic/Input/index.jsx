import React from "react";
import { Container } from "./style";

export const Input = ({
  width,
  height,
  type,
  onChange,
  defaultValue,
  placeholder,
  name,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={defaultValue}
      width={width}
      type={type}
      onChange={onChange}
      height={height}
    ></Container>
  );
};
export default Input;
