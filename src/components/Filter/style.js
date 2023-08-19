import styled from "styled-components";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as vector } from "../../assets/icons/Vector.svg";
import { ReactComponent as loop } from "../../assets/icons/loop.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icons = styled.div``;

Icons.Vector = styled(vector)`
  margin-right: 8px;
`;

Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Loop = styled(loop)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
  border-radius: 5px;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
export { Container, Icons, MenuWrapper, Section };
