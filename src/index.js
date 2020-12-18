import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Portfolio from "./components/Portfolio";
import About from './components/About';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import "./app.scss";

function App() {
  return (
    <div className="App">
	  	<Preloader />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);