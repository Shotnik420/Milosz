import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Main = styled.div`
  height: 10vh;
  background-color: #fff;
  width: 100vw;
  display: flex;
  position: fixed;
  justify-content: space-between;
  border-bottom: 2px #000 solid;
  & > ol {
    display: flex;
    width: 50vw;

    justify-content: space-around;
    align-items: center;
  }
  z-index: 1;
`;

const Opcja = styled.div`
  width: 15vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vh;
  color: black;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    transform: scale(0.8);
  }
`;
const Logo = styled.div`
  color: black;
  height: 100%;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vh;
  & > h1 {
    font-weight: normal;
  }
`;

function Nav() {
  return (
    <Main>
      <Logo>
        <h1>@miloszstrona</h1>
      </Logo>
      <ol>
        <Opcja>Modele</Opcja>

        <Opcja>Kontakt</Opcja>
      </ol>
    </Main>
  );
}

export default Nav;
