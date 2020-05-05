import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { css, cx } from "emotion";

import Header from "./components/Header";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/:id" component={Profile} exact />
        </Switch>
      </Router>
    );
  }
}
