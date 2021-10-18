import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import styles from "./ToDoInput.module.scss";
import { TASK_BODY_SCHEMA } from "./../../../utils/schema";

import cx from "classnames";

const ToDoInput = (props) => {
  const submitHandler = (values, formikBag) => {
    props.createTask(values.task);
    formikBag.resetForm();
  };

  const classNames = cx(styles.form);

  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={TASK_BODY_SCHEMA}
      onSubmit={submitHandler}
    >
      {(props) => {
        return (
          <Form className={classNames}>
            <h1>Lets go input new tasks!</h1>
            <Field className={styles.input} type="text" name="task" />
            <ErrorMessage name="task">
              {(msg) => (
                <div className={styles.errMessage}>
                  its a required field ok??
                </div>
              )}
            </ErrorMessage>
            <button className={styles.addTaskBtn} type="submit">
              +
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ToDoInput;
