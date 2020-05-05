import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { css, cx } from "emotion";

export default class Header extends Component {
  render() {
    return (
      <header
        className={css`
          height: 4.375rem;
          width: 100vw;
          background-color: #011632;
        `}
      >
        <nav
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <NavLink
            to="/"
            className={css`
              text-decoration: none;
            `}
          >
            <h1
              className={css`
                font-family: Helvetica;
                color: #fff;
                margin-left: 1.25rem;
                font-weight: 300;
                &:hover {
                  color: #bada55;
                }
              `}
            >
              Home
            </h1>
          </NavLink>
          <div
            className={css`
              display: flex;
            `}
          >
            <NavLink
              to="/signup"
              className={css`
                text-decoration: none;
              `}
            >
              <h2
                className={css`
                  font-family: Helvetica;
                  color: #fff;
                  margin-right: 1.25rem;
                  font-size: 0.875rem;
                  font-weight: 300;
                  &:hover {
                    color: #bada55;
                  }
                `}
              >
                Sign Up
              </h2>
            </NavLink>
            <NavLink
              to="/signin"
              className={css`
                text-decoration: none;
              `}
              activeStyle={{
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              <h2
                className={css`
                  font-family: Helvetica;
                  color: #fff;
                  margin-right: 1.25rem;
                  font-size: 0.875rem;
                  font-weight: 300;
                  &:hover {
                    color: #bada55;
                  }
                `}
              >
                Sign In
              </h2>
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
