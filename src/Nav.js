import { Link } from "react-router-dom";
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
  user-select: none;
  &:hover {
    transform: scale(0.9);
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
  cursor: pointer;
  & > h1 {
    font-weight: normal;
    user-select: none;
  }
`;

function Nav() {
  return (
    <Main>
      <Link to="/">
        <Logo>
          <h1>@miloszstrona</h1>
        </Logo>
      </Link>
      <ol>
        <Link to="/">
          <Opcja>Modele</Opcja>
        </Link>

        <Link to="/kontakt">
          <Opcja>Kontakt</Opcja>
        </Link>
      </ol>
    </Main>
  );
}

export default Nav;
