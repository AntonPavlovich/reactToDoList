import React from "react";
import "./App.css";
import Todolist from "./components/ToDoList/ToDoList";



function App(props) {
  return (
    <React.StrictMode>
      <React.Fragment>
        <Todolist />
      </React.Fragment>
    </React.StrictMode>
  );
}

export default App;
