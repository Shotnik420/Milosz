import "./App.css";
import styled from "styled-components";
import {
  BsFillPersonFill,
  BsFillHouseDoorFill,
  BsFillTelephoneFill,
  BsDiscord,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Main = styled.div`
  height: 90vh;
  padding: 10vh 0;
  width: 100vw;
  display: flex;

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
  @media only screen and (max-width: 450px) {
    height: 100vh;
    flex-direction: column;
  }
`;

const LP = styled.div`
  width: 60vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > ol {
    width: 50vw;
    height: 60vh;
    list-style: none;
  }
  & > ol > li {
    font-size: 5vh;
    padding: 1vh 0;
    display: flex;
    align-items: center;
  }
  & > ol > li > p {
    margin-left: 3vw;
  }
  @media only screen and (max-width: 450px) {
    width: 100vw;
    justify-content: flex-end;
    & > ol {
      width: 100vw;
    }
    & > ol > li {
      font-size: 3vh;
      padding: 1vh 5vw;
    }
    & > ol > li > svg {
      font-size: 6vh;
    }
  }
`;
const PP = styled.div`
  width: 40vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 450px) {
    align-items: center;
    width: 100vw;
    height: 70vh;
    & > iframe {
      height: 100%;
    }
  }
`;

export default function Callme() {
  return (
    <Main>
      <LP>
        <ol>
          <li>
            <h1>Kontakt</h1>
          </li>

          <li>
            <BsFillPersonFill style={{ height: "100%" }} />
            <p>Milosz Nowak</p>
          </li>
          <li>
            {" "}
            <BsFillHouseDoorFill style={{ height: "100%" }} />
            <p>ul.chujapan 13 42-600 Woźniki</p>
          </li>
          <li>
            {" "}
            <AiOutlineMail style={{ height: "100%" }} />
            <p>milosznowak@gmail.com</p>
          </li>
          <li>
            {" "}
            <BsFillTelephoneFill style={{ height: "100%" }} />
            <p>+48 123 456 789</p>
          </li>
          <li>
            {" "}
            <BsDiscord style={{ height: "100%" }} />
            <p>Fuzz #4093</p>
          </li>
        </ol>
      </LP>
      <PP>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28664.973262034502!2d19.007745420987582!3d50.57787793691041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d2ce8dbb771d%3A0xa7d8bc7d7d197fe6!2zV2_Fum5pa2k!5e0!3m2!1spl!2spl!4v1691622128094!5m2!1spl!2spl"
          width="90%"
          height="70%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </PP>
    </Main>
  );
}
