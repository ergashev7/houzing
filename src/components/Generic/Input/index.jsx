import React from "react";
import { Container } from "./style";

export const Input = ({ type, onChange }) => {
  return <Container width={100} type={type} onChange={onChange}></Container>;
};
