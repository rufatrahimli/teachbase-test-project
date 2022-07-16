import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { children, ...other } = props;
  return (
    <button className={styles.btn} {...other}>
      {children}
    </button>
  );
};

export default Button;
