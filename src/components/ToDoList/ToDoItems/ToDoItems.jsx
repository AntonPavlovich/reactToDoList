import React from "react";
import styles from "./ToDoItems.module.scss";

import cx from "classnames";
import { updateArr } from "../../../redux/actions";

const Todoitems = (props) => {
  const { tasks, dispatch } = props;

  const deleteToDO = (id) => {
    const filteredArr = tasks.filter((task) => task.id !== id);
    dispatch(updateArr(filteredArr));
  };

  const toggleIsDone = (id) => {
    const checkedArr = tasks.map((task) => {
      const checkedTask = {
        ...task,
        isDone: task.id === id ? !task.isDone : task.isDone,
      };
      return checkedTask;
    });
    dispatch(updateArr(checkedArr));
  };
  return (
    <div className={styles.tasksWrapper}>
      {tasks.map((task) => {
        const classnames = cx({
          [styles.doneTask]: task.isDone,
        });
        return (
          <div className={styles.task} id={task.id} key={task.id}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={() => toggleIsDone(task.id)}
            />
            <p className={classnames}>{task.body}</p>
            <button onClick={() => deleteToDO(task.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todoitems;
