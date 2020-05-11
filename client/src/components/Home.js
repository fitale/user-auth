import React, { Component } from "react";
import { css, cx } from "emotion";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section
          className={css`
            background-color: #eeb5a5;
            height: 40vh;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <NavLink
            to="/signup"
            className={css`
              text-decoration: none;
              background-color: lightgrey;
              margin: 10px;
              border-radius: 5px;
              &:hover {
                cursor: pointer;
              }
            `}
          >
            <div
              className={css`
                height: 10vw;
                width: 20vw;
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <h3
                className={css`
                  font-family: Helvetica;
                  font-weight: 100;
                  color: black;
                  border-bottom: 1px solid transparent;
                  &:hover {
                    border-bottom: 1px solid black;
                    transition: all 0.5s ease-in;
                  }
                `}
              >
                Sign Up
              </h3>
            </div>
          </NavLink>
          <NavLink
            to="/signin"
            className={css`
              text-decoration: none;
              background-color: lightgrey;
              margin: 10px;
              border-radius: 5px;
            `}
          >
            <div
              className={css`
                height: 10vw;
                width: 20vw;
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <h3
                className={css`
                  font-family: Helvetica;
                  font-weight: 100;
                  color: black;
                  border-bottom: 1px solid transparent;
                  &:hover {
                    border-bottom: 1px solid black;
                    transition: all 0.5s ease-in;
                  }
                `}
              >
                Sign In
              </h3>
            </div>
          </NavLink>
        </section>
      </main>
    );
  }
}
