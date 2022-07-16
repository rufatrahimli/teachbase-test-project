import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { userLogin } from "../../auth";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const { setIsLoggedIn } = props;
  const [login, setLogin] = useState("");
  const [loginisValid, setLoginIsValid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordlIsValid] = useState("");
  const [error, setError] = useState(null);

  const onHandleChange = (e, setState, validate = () => {}) => {
    let value = e.target.value;
    setState(value);
    validate(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    userLogin(login, password)
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          localStorage.setItem("LOGGED_IN", "true");
          setIsLoggedIn(true);
        } 
      })
      .catch((err) => setError(err?.response?.data?.errors?.login));
  };

  const validatePasswordHandler = (password) => {
    setPasswordlIsValid(password.trim().length > 5);
  };

  const validateLoginHandler = (login) => {
    setLoginIsValid(login.trim().length > 3);
  };

  return (
    <div className={styles.login__form}>
      <h2>Добро пожаловать!</h2>
      <p>
        Всё ещё нет аккаунта? <Link to={"/register"}> Зарегистрируйся</Link>
      </p>
      <form onSubmit={onFormSubmit}>
        <Input
          isValid={loginisValid}
          type={"text"}
          id={"login"}
          label={"Логин"}
          value={login}
          onChange={(e) => onHandleChange(e, setLogin, validateLoginHandler)}
        />
        <Input
          isValid={passwordIsValid}
          type="password"
          id={"password"}
          label={"Пароль"}
          value={password}
          onChange={(e) =>
            onHandleChange(e, setPassword, validatePasswordHandler)
          }
        />
        {error && <p>{error}</p>}
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
};

export default LoginForm;
