import { Container } from "./style";

export const Button = ({ children, type, width, height, onClick }) => {
  return (
    <Container type={type} width={width} height={height} onClick={onClick}>
      {children || "Generic Button"}
    </Container>
  );
};
export default Button;
