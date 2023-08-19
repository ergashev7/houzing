import { styled } from "styled-components";

const Container = styled.input`
  font-family: "Montserrat";
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 2px;
  min-width: 120px;
  padding-left: 20px;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? `35px` : "20px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  position: relative;
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
`;

export { Container, Wrapper, Icon };
