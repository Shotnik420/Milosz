import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Left = styled.div`
  height: 100vh;
  width: 45vw;
`;
const Right = styled.div`
  height: 100vh;
  width: 45vw;
  display: flex;
  flex-direction: column;
`;
const UPPER = styled.div`
  height: 100vh;
  width: 90vw;
  z-index: 3;
  display: flex;
  background-color: pink;
  align-items: center;
`;
const BACK = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 2;
  position: absolute;
  left: -5vw;
`;

const CloseBelt = styled.div`
  width: 100%;
  height: 20vh;
  & > img {
    height: 10vh;
    width: 10vh;
    position: relative;
  }
`;

const appear = keyframes`
    from{
      top: 10vh;
      opacity: 0;
    }
`;

const disappear = keyframes`
    from{
      top: 0vh;
      opacity: 1;
    }
    to{
      top: 10vh;
      opacity: 0;
    }
`;

export default function Overlay(props) {
  const [active, setActive] = useState(true);
  const Main = styled.div`
    animation: ${(props) => (active ? appear : disappear)} 500ms ease-in;
    height: 100vh;

    width: 90vw;
    position: fixed;
    z-index: 2;

    top: 0;
    left: 5vw;
  `;
  return (
    <Main>
      <BACK
        onClick={() => {
          setActive(false);
          props.fuck();
        }}
      ></BACK>
      <UPPER>
        <Left>
          <h3>{props.bingo[1]}</h3>
          <h1>{active}</h1>
        </Left>
        <Right>
          <CloseBelt>
            <img src="./close.svg" />
          </CloseBelt>
          <h1>{props.bingo[0]}</h1>
          <p>{props.bingo[2]}</p>
        </Right>
      </UPPER>
    </Main>
  );
}
