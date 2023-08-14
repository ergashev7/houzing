import styled from "styled-components";
const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffff",
        color: "white",
      };
    case "light":
      return {
        background: "#ffff",
        border: "1px solid #E6E9EC",
        color: "#ffff",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffff ",
      };
  }
};
const Container = styled.input`
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  outline: none;
  border: 1px solid #e6e9ec;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  border-radius: 2px;
`;
export { Container };
