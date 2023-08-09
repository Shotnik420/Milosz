import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Main = styled.div`
  height: 15vh;
  background-color: #fff;
  width: 100vw;
  display: flex;
  justify-content: center;
  border-top: 2px #000 solid;
  z-index: 1;
  font-size: 2vh;
  align-items: center;
`;

function Footer() {
  return (
    <Main>
      <BsYoutube style={{ height: "100%" }} />
      <AiFillInstagram style={{ height: "100%" }} />
      <h1>Miłosz Nowak © 2023</h1>
    </Main>
  );
}

export default Footer;
