import { BiCube, BiImageAlt } from "react-icons/bi";
import { GiLaserBlast } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import styled from "styled-components";
import { order } from "./Galeria";

const Main = styled.div`
  width: 5vw;
  height: 1.5vh;
  padding: 1vh 1vw;
  background-color: #ff5945;
  position: relative;
  bottom: 0vh;
  left: 17vw;
  z-index: 1;
  border-radius: 0.5rem;
  margin: 1vh 0;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 300ms;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
  & > svg {
    font-size: 1.5rem;
  }
`;
function ModelTag() {
  return (
    <Main
      onClick={() => {
        order("model");
      }}
    >
      <p>Model</p>
      <BiCube />
    </Main>
  );
}
function GrawTag() {
  return (
    <Main
      onClick={() => {
        console.log("nie graj ze mną");
      }}
      style={{
        backgroundColor: "#85BF37 ",
      }}
    >
      <p>Drewno </p>
      <GiLaserBlast />
    </Main>
  );
}
function WszystkoTag() {
  return (
    <Main
      onClick={() => {
        console.log("nie graj ze mną");
      }}
      style={{
        width: "6vw",
        backgroundColor: "#3b8eaa",
      }}
    >
      <p>Wszystko</p>
      <FaBoxes />
    </Main>
  );
}

export { ModelTag, GrawTag, WszystkoTag };
