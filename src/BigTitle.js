import logo from "./logo.svg";
import { Suspense } from "react";
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
const Main = styled.div`
  height: 80vh;
  padding-top: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

const LP = styled.div`
  width: 50vw;
  height: 100%;

  display: flex;
  padding-left: 3%;
  flex-direction: column;
  justify-content: center;
  & > h1 {
    font-size: 22vh;
  }
  & > p {
    font-size: 4.5vh;
  }
`;
const PP = styled.div`
  width: 50vw;
  height: 100%;
  background-size: 100% 100%;
`;

function Model(props) {
  const { scene } = useGLTF("/dropout_bear.glb");
  return (
    <>
      <OrbitControls
        maxPolarAngle={10}
        enabled={true}
        enableDamping={true}
        enablePan={false}
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={5}
      />
      <PerspectiveCamera makeDefault fov={90} position={[0, 0, 5]} />
      <ambientLight />
      <pointLight position={[10, 10, 0]} intensity={1.5} />
      <primitive object={scene} scale={4.5} position={[0, 3, 0]} {...props} />
    </>
  );
}

export default function BigTitle() {
  return (
    <Main>
      <LP>
        <h1>MIŁOSZ NOWAK</h1>
        <p>3D DESIGN, MODELING & PRINTING</p>
      </LP>
      <PP>
        <Suspense>
          <Canvas shadows style={{ zIndex: 0 }}>
            <Model />
            <color attach="background" args={["white"]} />
          </Canvas>
        </Suspense>
      </PP>
    </Main>
  );
}
