import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import UserPage from "./components/UserPage/UserPage";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("LOGGED_IN");
    if (storage === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("LOGGED_IN");
    setIsLoggedIn(false);
    
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && (
            <>
              <Route path={"/"} exact>
                <Home setIsLoggedIn={setIsLoggedIn} />
              </Route>
              <Route path={"/login"} exact>
                <Container>
                  <LoginForm setIsLoggedIn={setIsLoggedIn} />
                </Container>
              </Route>
              <Route path={"/register"} exact>
                <Container>
                  <RegisterForm />
                </Container>
              </Route>
            </>
          )}
          {isLoggedIn ? <Redirect to={"/feed"} /> : <Redirect to={"/"}/>}
          {isLoggedIn && <UserPage />}          
        </main>
      </div>
    </Router>
  );
}

export default App;
