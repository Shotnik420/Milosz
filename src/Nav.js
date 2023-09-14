import { Link } from "react-router-dom";
import "./App.css";
import { order } from "./Galeria";
import styled from "styled-components";

import { HashLink } from "react-router-hash-link";
const Main = styled.div`
  height: 10vh;
  overflow-x: hidden;
  background-color: #fff;
  width: 100vw;
  display: flex;
  position: fixed;
  justify-content: space-between;
  border-bottom: 2px #000 solid;
  z-index: 10 !important;
  & > ol {
    display: flex;
    width: 70vw;

    justify-content: flex-end;
    align-items: center;
  }

  z-index: 1;
  @media only screen and (max-width: 450px) {
    & > ol > a:first-child {
      display: none;
    }
  }
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
  margin-right: 5vw;
  &:hover {
    transform: scale(0.9);
  }
  @media only screen and (max-width: 450px) {
    font-size: 3vh;
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
  @media only screen and (max-width: 450px) {
    font-size: 2vh;
    width: 65vw;
  }
`;

function Nav() {
  return (
    <Main>
      <Link to="/">
        <Logo>
          <h1>@zenlab</h1>
        </Logo>
      </Link>
      <ol>
        <HashLink to="/#jump">
          <Opcja>Portfolio</Opcja>
        </HashLink>
        <Link to="/kontakt">
          <Opcja>Kontakt</Opcja>
        </Link>
      </ol>
    </Main>
  );
}

export default Nav;
