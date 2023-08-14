import React from "react";
import { Container } from "./index";

export const Button = ({ children, type, onClick }) => {
  return (
    <Container width={100} type={type} onClick={onClick}>
      {children || "Generic Button"}
    </Container>
  );
};
