import React from "react";
import { Container } from "./style";
import { Input, Button } from "../Generic";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder={"test"} width={200} />
      <Button>test</Button>
    </Container>
  );
};
export default Home;
