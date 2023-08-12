import React from "react";
import { Container, Link, Logo, Section, Wrapper } from "./style.js";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/img/Vector.png";
import { navbar } from "../../utils/navbar";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo src={logoImg} />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
export default Home;
