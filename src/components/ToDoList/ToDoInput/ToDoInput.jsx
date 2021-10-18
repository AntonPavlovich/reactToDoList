import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { TASK_BODY_SCHEMA } from "../../../utils/schema";

import styles from "./ToDoInput.module.scss";
const Todoinput = (props) => {
  const { addTask } = props;

  const handleSubmit = (values, formikBag) => {
    addTask(values.task);
    formikBag.resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>Your personal todos</h1>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={TASK_BODY_SCHEMA}
        initialValues={{ task: "" }}
      >
        <Form className={styles.form}>
          <Field className={styles.input} name="task" />
          <ErrorMessage name="task">
            {(msg) => <div className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>
          <button className={styles.btn} type="submit">
            <i className="fa fa-plus"></i>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Todoinput;
