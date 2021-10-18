import React, { useState } from "react";
import styles from "./ToDoItems.module.scss";
import cx from "classnames";

const Todoitems = (props) => {
   
  const toggleIsDone = (id) => {
    const checkedArr = props.tasks.map((task) => {
      const checkedTask = {
        ...task,
        isDone : task.id === id ? !task.isDone : task.isDone
      }
      return checkedTask
    })
    props.setTasks(checkedArr)
  }

  const deleteTask = (id) => {
    const filteredArr = props.tasks.filter((task) => task.id !== id);
    props.setTasks(filteredArr);
  };

  return (
    <div>
      {props.tasks.map((task) => {
        const classnames = cx({
          [styles.done]: task.isDone,
        });

        return (
          <div id={task.id} className={styles.task} key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              value={task.isDone ? 'true': 'false'}
              onChange={() => toggleIsDone(task.id)}
            />
            <p className={classnames}>{task.text}</p>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todoitems;
