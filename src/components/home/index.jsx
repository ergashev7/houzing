import React from "react";
import { Container } from "./style";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  );
};
export default Home;
