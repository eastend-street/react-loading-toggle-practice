import React from "react";
import ReactDOM from "react-dom";
import SwitchText from "./SwitchText";
import ParentComp from "./ParentComp";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <SwitchText />
      <ParentComp />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
