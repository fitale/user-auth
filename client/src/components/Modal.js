import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { css, cx } from "emotion";

export default class Modal extends Component {
  componentDidMount() {
    console.log(this.props.user);
  }
  render() {
    return (
      <main>
        <NavLink to={`/${this.props.user.id}`}>
          <div>
            <h5>take me to user profile</h5>
          </div>
        </NavLink>
      </main>
    );
  }
}
