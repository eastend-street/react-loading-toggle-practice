import React from "react";
import ReactDOM from "react-dom";
import SwitchText from "./SwitchText";
import StudentList from "./StudentList";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <SwitchText />
      <StudentList isLoading={true} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
