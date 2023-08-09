import logo from "./close.svg";
import "./App.css";
import { useState, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import { BsArrowsMove } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
const Main = styled.div`
  height: 100vh;
  display: flex;

  width: 100vw;
  position: fixed;
  z-index: 2;

  top: 0;
`;

const appear = keyframes`
    from{
      margin-top: 10vh;
      opacity: 0;
    }
`;
const appear2 = keyframes`
    from{
      opacity: 0;
    }
`;

const Left = styled.div`
  height: 100vh;
  width: 45vw;
`;
const Right = styled.div`
  height: 100vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 0 5vw;
  & > h1 {
    font-size: 7vh;
    user-select: none;
  }
  & > p {
    margin-top: 5vh;
    font-size: 2.5vh;
    user-select: none;
  }
`;
const UPPER = styled.div`
  height: 100vh;
  width: 90vw;
  z-index: 5;
  margin-left: 5vw;
  display: flex;
  background-color: white;
  align-items: center;
  animation: ${appear} 500ms ease-in;
`;
const BACK = styled.div`
  height: 100vh;
  opacity: 0.3;
  width: 100vw;
  background-color: black;
  position: absolute;

  z-index: 4;
  animation: ${appear2} 500ms ease-in;
`;

const CloseBelt = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;

  justify-content: flex-end;
  & > img {
    height: 5vh;
    width: 5vh;
    user-select: none;

    cursor: pointer;
  }
`;

const Przycisk = styled.button`
  height: 7vh;
  width: 30vw;
  background-color: black;
  color: white;
  font-size: 3vh;
  font-weight: 500;
  font-family: "Asimov";
  src: url("Asimov.woff2") format("woff2"), url("Asimov.woff") format("woff");
  border: none;
  border-radius: 5vh;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Overlay(props) {
  const [active, setActive] = useState(true);
  var tabela = props.pozycja;
  var skala = props.duze;
  console.log(tabela);
  function ModelView(x) {
    const { scene } = useGLTF(props.modelPath);

    return (
      <>
        <OrbitControls
          maxPolarAngle={10}
          enabled={true}
          enableDamping={true}
          enablePan={false}
          enableZoom={true}
        />

        <PerspectiveCamera makeDefault fov={90} position={tabela} />
        <pointLight position={[10, 10, 0]} intensity={1.5} />
        <ambientLight />
        <primitive object={scene} scale={skala} position={[0, 3, 0]} {...x} />
      </>
    );
  }

  return (
    <Main>
      <BACK
        onClick={() => {
          setActive(false);
          props.fuck();
        }}
      />
      <UPPER>
        <Left>
          <Suspense>
            <Canvas shadows style={{ zIndex: 0 }}>
              <ModelView receiveShadow />
              <color attach="background" args={["white"]} />
            </Canvas>
          </Suspense>
        </Left>
        <Right>
          <CloseBelt
            onClick={() => {
              setActive(false);
              props.fuck();
            }}
          >
            <img src={logo} />
          </CloseBelt>
          <h1>{props.bingo[0]}</h1>
          <p>{props.bingo[1]}</p>
          <Przycisk>Pobierz</Przycisk>
        </Right>
      </UPPER>
    </Main>
  );
}
