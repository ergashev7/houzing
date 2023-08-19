import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    { type, width, height, defaultValue, placeholder, onChange, value, icon },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          type={type}
          width={width}
          height={height}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          icon={icon}
        ></Container>
      </Wrapper>
    );
  }
);
export default Input;
