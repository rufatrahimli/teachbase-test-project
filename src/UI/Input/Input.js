import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { id, label, isValid, ...other } = props;
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`${styles.input}  ${
          isValid === false ? styles.input_invalid : ""
        }`}
        {...other}
      />
    </div>
  );
};

export default Input;
