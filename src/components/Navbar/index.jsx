import React from "react";
import { Container, Link, Logo, Section, Wrapper, Main } from "./style.js";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/img/Vector.png";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic/Button/index.jsx";
import Filter from "../Filter/index.jsx";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo src={logoImg} />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("signin")} type="dark">
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter></Filter>
      <Outlet />
    </Container>
  );
};
export default Home;
