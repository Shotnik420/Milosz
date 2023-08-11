import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
const Main = styled.div`
  height: 15vh;
  background-color: #fff;
  width: 30vw;
  padding: 0 35vw;
  display: flex;
  justify-content: space-around;
  border-top: 2px #000 solid;
  z-index: 1;
  font-size: 2vh;
  align-items: center;
  & > h1 {
    font-weight: normal;
  }
  & > svg {
    transition: 300ms;
  }
  & > svg:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.2vh;
    padding: 0 10vw;
    width: 80vw;
    & > h1 {
      font-weight: bold;
    }
  }
`;

function Footer() {
  return (
    <Main>
      <AiOutlineInstagram style={{ fontSize: "5vh" }} />
      <AiOutlineYoutube style={{ fontSize: "5vh" }} />
      <h1>Miłosz Nowak © 2023</h1>
    </Main>
  );
}

export default Footer;
