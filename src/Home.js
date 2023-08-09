import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Galeria from "./Galeria";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BigTitle from "./BigTitle";
import reportWebVitals from "./reportWebVitals";

export default function Home() {
  return (
    <>
      <BigTitle />
      <Galeria />
    </>
  );
}
