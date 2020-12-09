import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import PrivateRoute from "./routes/private";
import AuthForm from "./components/auth/AuthForm";
import { AuthContext } from "./components/auth/auth";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/index";

function App() {

  const existingToken = localStorage.getItem("token") || "";
  const existingUsername = localStorage.getItem("username") || "";
  const [authToken, setAuthToken] = useState(existingToken);
  const [username, setUsername] = useState(existingUsername);
  const setUserName = (data) => {
    if (!data) {
      localStorage.removeItem("username");
      setUsername("");
    } else {
      localStorage.setItem("username", data);
      setUsername(data);
    }
  };

  const setToken = (data) => {
    if (!data) {
      localStorage.removeItem("token");
      setAuthToken("");
    } else {
      localStorage.setItem("token", JSON.stringify(data));
      setAuthToken(data);
    }
  };

  return (

    <AuthContext.Provider
    value={{
      authToken,
      setAuthToken: setToken,
      username,
      setUserName: setUserName,
    }}
  >
    <main>
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          {/* <Route exact path="/" component={AuthForm} /> */}
          <Route exact path="/login" component={AuthForm} />
          <Route exact path="/signup" component={AuthForm} />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <PrivateRoute exact path="/home" component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </main>
  </AuthContext.Provider>
  );
}

export default App;
