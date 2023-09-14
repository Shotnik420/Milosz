import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Overlay from "./Overlay";
import { BiCube, BiImageAlt } from "react-icons/bi";
import { GiLaserBlast } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import { useState, useEffect } from "react";
const MainTag = styled.div`
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
    <MainTag
      onClick={() => {
        order("model");
      }}
    >
      <p>Model</p>
      <BiCube />
    </MainTag>
  );
}
function GrawTag() {
  return (
    <MainTag
      onClick={() => {
        order("graw");
      }}
      style={{
        backgroundColor: "#85BF37 ",
      }}
    >
      <p>Drewno </p>
      <GiLaserBlast />
    </MainTag>
  );
}
function WszystkoTag() {
  return (
    <MainTag
      onClick={() => {
        order("wszystko");
      }}
      style={{
        width: "6vw",
        backgroundColor: "#3b8eaa",
      }}
    >
      <p>Wszystko</p>
      <FaBoxes />
    </MainTag>
  );
}
function order(x) {
  //funkcja gdzie sortuje wszystkie obiekty w gridzie na podstawie czy mają class model czy graw
  //sprawdzam x czy wybrał model czy graw
  //Usuwam wszystkie children z grida i dodaje te które mają odpowiednią klasę

  if (x === "model") {
    var wszystkie = document.querySelectorAll(".post");

    wszystkie.forEach((element) => {
      console.log(element.className);

      //jeżeli jedna z klas elementu to model to go nie usuwaj, w innym przypadku zmień jego display na none
      if (element.classList.contains("model")) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  } else if (x === "graw") {
    var wszystkie = document.querySelectorAll(".post");
    console.log(wszystkie);
    wszystkie.forEach((element) => {
      if (element.classList.contains("graw")) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  } else if (x === "wszystko") {
    var wszystkie = document.querySelectorAll(".post");
    console.log(wszystkie);
    wszystkie.forEach((element) => {
      element.style.display = "block";
    });
  }
}

const Main = styled.div`
  min-height: 90vh;
  padding: 10vh 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    padding-top: 5vh;
    color: black;
    font-size: 11vh;
    text-align: center;
  }
  & > p {
    color: #74747f;
    font-weight: bold;
    font-size: 3vh;
    padding: 4vh 0;
  }
  @media only screen and (max-width: 450px) {
    padding: 3vh 0;
    & > h1 {
      font-size: 7vh;
      text-align: center;
    }
    & > p {
      text-align: center;
      font-size: 3vh;
    }
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
  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Menu = styled.div`
  width: 30vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-right: 50vw;

  & > * {
    bottom: 0;
    left: 0;
    margin: 0;
  }
`;

const Kratka = styled.div`
  height: 35vh;
  width: 100%;

  position: relative;
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s ease;
  overflow: hidden;

  cursor: pointer;

  & > h1 {
    opacity: 0;
  }
  &:hover {
  }
  &:hover article {
    opacity: 1;
    bottom: 0vh;
  }
`;
const Middle = styled.article`
  transition: 0.5s ease;
  opacity: 0;
  width: 20vw;
  padding: 0 2.5vw;
  height: 35vh;

  position: absolute;
  margin-top: -5.5vh;
  left: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  color: white;
  background-color: #00000066;
  & > h1 {
    margin-top: 0vh;
    font-size: 4vh;
    user-select: none;
  }
  & > p {
    margin-top: 1vh;
    font-size: 2.5vh;
    user-select: none;
  }
  @media only screen and (max-width: 450px) {
    width: 70vw;
    padding: 0 5vw;
  }
`;

export default function Galeria() {
  const [kontent, setKontent] = useState("");
  const [sciezka, setSciezka] = useState("");
  const [kamera, setKamera] = useState("");
  const [skala, setSkala] = useState("");
  const [pokaz, setPokaz] = useState(false);
  const [zdjecie, setZdjecie] = useState("");
  const [pozycjamodelu, setPozycjamodelu] = useState([0, 0, 0]);
  const [posiadaModel, setPosiadaModel] = useState(false);
  function klik() {
    setPokaz(true);
  }
  function close() {
    setPokaz(false);
  }

  return (
    <Main id="jump">
      {pokaz && (
        <Overlay
          fuck={close}
          modelPath={sciezka}
          bingo={kontent}
          pozycja={kamera}
          pozycjamodelu={pozycjamodelu}
          duze={skala}
          zdjecie={zdjecie}
          czyPosiadaModel={posiadaModel}
        />
      )}
      <h1>Wszystko</h1>
      <p>Interaktywne modele & zdjęcia wydruków</p>
      <Menu>
        <WszystkoTag />
        <ModelTag />
        <GrawTag />
      </Menu>

      <Grid id="Grid">
        <Kratka
          style={{
            backgroundImage: `url(./img/pokrywa1.jpg)`,
          }}
          onClick={() => {
            setPosiadaModel(true);
            setKontent(["Pokrywa sprzęgła", "dla motocyklu Yamaha YZ 125."]);
            setSciezka("./pokrywa.glb");
            setKamera([0, 0, 5]);
            setSkala(0.03);
            setPozycjamodelu([0, 0, 0]);
            setZdjecie("./img/pokrywa1.jpg");

            klik();
          }}
          //to musisz dać, jaka kategria and shit
          className="model post"
        >
          <ModelTag />
          <Middle>
            <h1>Pokrywa sprzęgła</h1>
            <p>dla motocyklu Yamaha YZ 125</p>
          </Middle>
        </Kratka>

        <Kratka
          //Ustaw tło miniaturki
          style={{
            backgroundImage: `url(./img/rower.jpg)`,
          }}
          // Tu są dane, które się pokażą po kliknięciu
          onClick={() => {
            setPosiadaModel(false);
            setKontent(["Długi tytul", "Długi Opis"]);
            setZdjecie("./img/rower.jpg");
            klik();
          }}
          //to musisz dać, jaka kategria and shit
          className="graw post"
        >
          {/* Tutaj daj tagi */}
          <GrawTag />

          {/* Tutaj daj tekst na miniaturkę */}
          <Middle>
            <h1>Rower z drewna</h1>
            <p>co jest</p>
          </Middle>
        </Kratka>

        <Kratka
          //Ustaw tło miniaturki
          style={{
            backgroundImage: `url(./img/monitor.jpg)`,
            backgroundPosition: "0% 10%",
          }}
          // Tu są dane, które się pokażą po kliknięciu
          onClick={() => {
            setPosiadaModel(false);
            setKontent(["Długi tytul", "Długi Opis"]);
            setSciezka("./chopek.glb");
            setKamera([0, 0, 45]);
            setSkala(1);
            setZdjecie("./img/creep.jpg");
            klik();
          }}
          //to musisz dać, jaka kategria and shit
          className="model post"
        >
          {/* Tutaj daj tagi */}
          <ModelTag />

          {/* Tutaj daj tekst na miniaturkę */}
          <Middle>
            <h1>To jest chyba na monitor</h1>
            <p>Tak myśle</p>
          </Middle>
        </Kratka>

        <Kratka
          //Ustaw tło miniaturki
          style={{
            backgroundImage: `url(./img/creep.jpg)`,
          }}
          // Tu są dane, które się pokażą po kliknięciu
          onClick={() => {
            setPosiadaModel(false);
            setKontent(["Długi tytul", "Długi Opis"]);
            setSciezka("./chopek.glb");
            setKamera([0, 0, 45]);
            setSkala(1);
            setZdjecie("./img/creep.jpg");
            klik();
          }}
          //to musisz dać, jaka kategria and shit
          className="graw post"
        >
          {/* Tutaj daj tagi */}
          <GrawTag />

          {/* Tutaj daj tekst na miniaturkę */}
          <Middle>
            <h1>Tytul</h1>
            <p>Opis</p>
          </Middle>
        </Kratka>
      </Grid>
    </Main>
  );
}
export { order };
