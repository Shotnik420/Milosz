import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Overlay from "./Overlay";
import { useState, useEffect } from "react";

const Main = styled.div`
  min-height: 90vh;

  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    padding-top: 5vh;
    color: #222226;
    font-size: 11vh;
    text-align: center;
  }
  & > p {
    color: #74747f;
    font-weight: bold;
    font-size: 3vh;
    padding: 4vh 0;
  }
`;
const Grid = styled.div`
  width: 80vw;
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 5vh;
  margin-top: 5vh;
`;
const Kratka = styled.div`
  height: 35vh;
  width: 100%;
  background-color: black;
  background-size: 100% 100%;
  transition: 0.5s ease;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
  }
  & > h1 {
    opacity: 0;
  }
  &:hover img {
    opacity: 0.3;
  }
  &:hover article {
    opacity: 1;
    bottom: 22.5vh;
  }
`;
const Middle = styled.article`
  transition: 0.5s ease;
  opacity: 0;
  width: 25vw;
  height: 10vh;
  position: relative;
  bottom: 15vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
  & > h1 {
    font-size: 5vh;
    user-select: none;
  }
  & > p {
    font-size: 2.5vh;
    user-select: none;
  }
`;

export default function Galeria() {
  const [kontent, setKontent] = useState("");
  const [sciezka, setSciezka] = useState("");
  const [kamera, setKamera] = useState("");
  const [skala, setSkala] = useState("");
  const [pokaz, setPokaz] = useState(false);
  function klik() {
    setPokaz(true);
  }
  // useEffect(()=>{
  //   console.log("NIGGGAAA")
  // }, kontent)
  function close() {
    setPokaz(false);
  }
  return (
    <Main>
      {pokaz && (
        <Overlay
          fuck={close}
          modelPath={sciezka}
          bingo={kontent}
          pozycja={kamera}
          duze={skala}
        />
      )}
      <h1>Zdjęcia wydruków</h1>
      <p>Stuff shit napis hehe</p>
      <Grid>
        <Kratka
          onClick={() => {
            setKontent(["Dropout Bear", "Maskotka Kanyego Westa 2004-2007"]);
            setSciezka("./dropout_bear.glb");
            setKamera([0, 0, 5]);
            setSkala(4.5);
            klik();
          }}
        >
          <img src="https://radiomilwaukee.wordpress.com/files/2008/08/kanyewestbear.jpg" />
          <Middle>
            <h1>Dropout Bear</h1>
            <p>Maskotka Kanyego Westa 2004-2007</p>
          </Middle>
        </Kratka>
        <Kratka
          onClick={() => {
            setKontent([
              "Chropki",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ]);
            setSciezka("./chopek.glb");
            setKamera([0, 0, 45]);
            setSkala(1);
            klik();
          }}
        >
          <img src="./chopki.png" />
          <Middle>
            <h1>Choprki</h1>
            <p>Chopki/korki get it?</p>
          </Middle>
        </Kratka>
        <Kratka
          onClick={() => {
            setKontent(["JEDNO", "Drugie"]);
            setSciezka("./chopek.glb");
            setKamera([0, 0, 5]);
            klik();
          }}
        >
          <img src="https://techtutor.pl/wp-content/uploads/2016/02/wydruk-3d-Yody.jpg" />
          <Middle>
            <h1>Wydruk Yody</h1>
            <p>Całkiem fajny</p>
          </Middle>
        </Kratka>
        <Kratka
          onClick={() => {
            setKontent(["JEDNO", "Drugie"]);
            setSciezka("./dropout_bear.glb");
            klik();
          }}
        >
          <img src="https://techtutor.pl/wp-content/uploads/2016/02/wydruki-3d-prototyp%C3%B3w-nakr%C4%99tka.jpg" />
          <Middle>
            <h1>Kanye</h1>
            <p>I love him</p>
          </Middle>
        </Kratka>

        <Kratka
          onClick={() => {
            setKontent(["JEDNO", "Drugie"]);
            setSciezka("./dropout_bear.glb");
            klik();
          }}
        >
          <img src="https://bi.im-g.pl/im/69/fb/1b/z29342825AMP,Kanye-West-.jpg" />
          <Middle>
            <h1>Kanye</h1>
            <p>I love him</p>
          </Middle>
        </Kratka>
      </Grid>
    </Main>
  );
}
