import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Navigation.module.css";
const Navigation = (props) => {
  const { isLoggedIn, onLogout } = props;
  return (
    <nav className={styles.nav}>
      <ul>
        {!isLoggedIn && (
          <>
            <li>
              <Link to={"/"}>Домой</Link>
            </li>
            <li>
              <Link to={"/register"}>Регистрация</Link>
            </li>
            <li>
              <Link to={"/login"}>Войти</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <Button onClick={onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
