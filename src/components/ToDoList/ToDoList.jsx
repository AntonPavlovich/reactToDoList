import React,{ useReducer } from "react";
import { updateArr } from "../../redux/actions";
import { tasksReducer } from "../../redux/tasksReducer";
import Todoinput from "./ToDoInput/ToDoInput";
import Todoitems from "./ToDoItems/ToDoItems";

import styles from './ToDoList.module.scss'

const Todolist = () => {
 
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      body: text,
      isDone: false,
    };
    dispatch(updateArr([...state.tasks, newTask]));
  };

  return <div className={styles.toDoWrapper}>
    <Todoinput addTask={addTask}/>
    <Todoitems tasks={state.tasks} dispatch = {dispatch}/>
  </div>;
};

export default Todolist;
