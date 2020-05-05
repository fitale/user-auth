import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { css, cx } from "emotion";

import Header from "./components/Header";
import Signup from "./components/Signup";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
      </Router>
    );
  }
}
