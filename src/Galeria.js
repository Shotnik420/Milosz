import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

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
function klik() {}
export default function Galeria() {
  return (
    <Main>
      <h1>Zdjęcia wydruków</h1>
      <p>Stuff shit napis hehe</p>
      <Grid>
        <Kratka onClick={klik}>
          <img src="https://media.moddb.com/images/downloads/1/195/194882/ballas_logo_1.jpg" />
          <Middle>
            <h1>"Balas is so hot"</h1>
            <p>balas:</p>
          </Middle>
        </Kratka>
        <Kratka onClick={klik}>
          <img src="https://i0.wp.com/3d.edu.pl/wp-content/uploads/2020/04/Najmniejsze-wydruki-3D.jpg?fit=1560%2C854&ssl=1" />
          <Middle>
            <h1>Druk wieży </h1>
            <p>Całkiem mała</p>
          </Middle>
        </Kratka>
        <Kratka onClick={klik}>
          <img src="https://techtutor.pl/wp-content/uploads/2016/02/wydruk-3d-Yody.jpg" />
          <Middle>
            <h1>Wydruk Yody</h1>
            <p>Całkiem fajny</p>
          </Middle>
        </Kratka>
        <Kratka onClick={klik}>
          <img src="https://techtutor.pl/wp-content/uploads/2016/02/wydruki-3d-prototyp%C3%B3w-nakr%C4%99tka.jpg" />
          <Middle>
            <h1>Kanye</h1>
            <p>I love him</p>
          </Middle>
        </Kratka>

        <Kratka onClick={klik}>
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
