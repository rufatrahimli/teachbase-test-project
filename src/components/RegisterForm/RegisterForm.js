import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { userRegister } from "../../auth";
import styles from "./RegisterForm.module.css";
import { Link, useHistory } from "react-router-dom";

const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [loginisValid, setLoginIsValid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordlIsValid] = useState("");
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const onHandleChange = (e, setState, validate = () => {}) => {
    let value = e.target.value;
    setState(value);
    validate(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    userRegister(login, password, email)
      .then((res) => {
        if (res.status === 204) {
          console.log(res);
          history.push("/");
        }
      })
      .catch((err) => setError(err?.response?.data?.errors));
  };
  const validateEmailHandler = (email) => {
    let testval = /\S+@\S+\.\S+/;
    setEmailIsValid(testval.test(email));
  };

  const validatePasswordHandler = (password) => {
    setPasswordlIsValid(password.trim().length > 5);
  };

  const validateLoginHandler = (login) => {
    setLoginIsValid(login.trim().length > 3);
  };
  return (
    <div className={styles.register__form}>
      <h2>Регистрация</h2>
      <p>
        Есть аккаунт? <Link to={"/login"}>Войти</Link>
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
        {error && <p>{error.login}</p>}
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
        {error && <p>{error.password}</p>}
        <Input
          type={"text"}
          isValid={emailIsValid}
          id={"email"}
          label={"E-mail"}
          value={email}
          onChange={(e) => onHandleChange(e, setEmail, validateEmailHandler)}
        />
        {error && <p>{error.email}</p>}
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
