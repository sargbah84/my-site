import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from './components/About';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Data from './data.json';

import 'bootstrap/dist/css/bootstrap.css';
import "./app.scss";

const data = Data.data[0];

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header data={data} />
      <About data={data} />
      <Skills data={data} />
      <Portfolio data={data} />
      <Tools data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);