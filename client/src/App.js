import React, { Component, useState, useEffect } from "react";
import "./App.css";

import MainPage from "./pages/mainPage";
import PageNotFound from "./pages/404";
import CreatePost from "./pages/createPost";
import Login from "./pages/login";
import CreateUser from "./pages/createUser";

import Axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const [cardList, setCardList] = useState([]);
  const [profile, setProfile] = useState({});
  const [loggedin, setLogin] = useState(0);

  const getProfile = () => {
    return profile;
  };

  const getLogin = () => {
    return loggedin;
  };

  useEffect(() => {
    if (loggedin) {
      Axios.get("http://192.168.0.123:3001/api/getCard").then(
        (responseCards) => {
          setCardList(responseCards.data);
        }
      );
    }

  }, [loggedin]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Login
              {...props}
              loggedin={loggedin}
              setLogin={setLogin}
              setProfile={setProfile}
            />
          )}
        />
        <Route exact path="/CreateUser" component={CreateUser} />
        <Route
          exact
          path="/Home"
          render={(props) => (
            <MainPage
              {...props}
              profile={profile}
              setProfile={setProfile}
              cardList={cardList}
              setCardList={setCardList}
              loggedin={loggedin}
              getLogin={getLogin}
              setCardList={setCardList}
            />
          )}
        />
        <Route
          exact
          path="/CreatePost"
          render={(props) => (
            <CreatePost
              {...props}
              profile={profile}
              setProfile={setProfile}
              cardList={cardList}
              setCardList={setCardList}
              loggedin={loggedin}
              setCardList={setCardList}
            />
          )}
        />

        <Route exact path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
