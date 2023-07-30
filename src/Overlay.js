import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  background-color: red;
  width: 90vw;
  position: fixed;
  opacity: 0;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 5vw;
  pointer-events: none;
`;
const Left = styled.div`
  height: 100vh;
`;
const Right = styled.div`
  height: 100vh;
`;
export default function Overlay() {
  return (
    <Main>
      <Left></Left>
      <Right></Right>
    </Main>
  );
}
