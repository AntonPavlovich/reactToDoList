import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";

function App(props) {
  return (
    <React.StrictMode>
      <React.Fragment>
        <Calendar />
      </React.Fragment>
    </React.StrictMode>
  );
}

export default App;
