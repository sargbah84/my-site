import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from './components/About';
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
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);