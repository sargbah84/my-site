import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Credit from "./components/Credit";

import 'bulma/css/bulma.css';
import "./app.scss";

function App() {
  return (
    <div className="App">
	  	<Preloader />
      <Header />
      <Credit />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);