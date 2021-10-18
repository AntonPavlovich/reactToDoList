import React, { useState } from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import Todoitems from "./ToDoItems/ToDoItems";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (text) => {
    const task = {
      id: new Date(),
      text: text,
      isDone : false
    };

    setTasks([...tasks, task]);
  };



  return (
    <div>
      <ToDoInput createTask={createTask} />
      <Todoitems tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Todolist;
