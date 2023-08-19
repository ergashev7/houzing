import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
const Container = styled.div`
  height: 571px;
  border: 1px solid red;
  position: relative;
`;
const Arrow = styled(arrow)`
  position: absolute;
  cursor: pointer;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  bacground: black;
`;
export { Container, Arrow };
