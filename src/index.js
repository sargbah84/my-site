import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Preloader from "./components/Preloader";

import 'bulma/css/bulma.css';
import "./app.scss";

function App() {
  return (
    <div className="App">
	  <Preloader />
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);