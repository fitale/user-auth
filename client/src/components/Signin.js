import React, { Component } from "react";

// import libraries and packages
import axios from "axios";
import { css, cx } from "emotion";
import ReactModal from "react-modal";

// import components
import Modal from "./Modal";

// import assets
import image from "../assets/icons/home.svg";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    // grab user email and password in form
    this.email = React.createRef();
    this.password = React.createRef();
  }

  state = {
    isSignedIn: false,
    showModal: false,
    alert: false,
    user: {},
  };

  // form submission function
  handleForm = (e) => {
    e.preventDefault();
    // pull all users data
    axios.get("http://localhost:8080/users").then((res) => {
      let found = res.data.some((user) => {
        if (
          user.email === this.email.current.value &&
          user.password === this.password.current.value
        ) {
          return user;
        }
      });
      if (found) {
        this.setState({
          user: found,
          isSignedIn: true,
          showModal: true,
        });
      } else {
        alert("User and password are not correct");
      }
    });
  };

  render() {
    return (
      <main
        className={css`
          margin-top: 6.25rem;
        `}
      >
        <div
          className={css`
            height: 31.25rem;
            width: 31.25rem;
            margin: auto;
            border: 0.0625rem solid #000;
            border-radius: 0.3125rem;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <img
              className={css`
                height: 10vw;
                margin-top: 1.5rem;
              `}
              src={image}
              alt="logo"
            />
          </div>
          <form
            onSubmit={this.handleForm}
            className={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            <input
              ref={this.email}
              className={css`
                height: 2.5rem;
                width: 18.75rem;
                border-radius: 0.3125rem;
                padding-left: 0.625rem;
                outline: none;
                margin: 0.625rem;
                font-size: 1rem;
                &:focus,
                &:hover {
                  background-color: #e9e9e9;
                }
                &::placeholder {
                  font-family: Helvetica;
                  font-size: 1rem;
                }
              `}
              type="email"
              placeholder="email"
              name="email"
              required
              minLength="5"
            />
            <input
              ref={this.password}
              className={css`
                height: 2.5rem;
                width: 18.75rem;
                border-radius: 0.3125rem;
                padding-left: 0.625rem;
                font-size: 1rem;
                outline: none;
                margin: 0.625rem;
                &:focus,
                &:hover {
                  background-color: #e9e9e9;
                }
                &::placeholder {
                  font-family: Helvetica;
                  font-size: 1rem;
                }
              `}
              type="password"
              placeholder="password"
              name="password"
              required
              minLength="8"
            />
            <button
              name="submit"
              type="submit"
              className={css`
                background-color: #09af00;
                height: 2.5rem;
                width: 10rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.3125rem;
                outline: none;
                margin: 1.25rem;
                &:hover {
                  cursor: pointer;
                  transform: scale(1.1);
                  transition: all ease-in-out 0.5s;
                }
              `}
            >
              <h5
                className={css`
                  font-family: Helvetica;
                  font-weight: 100;
                  font-size: 1rem;
                  margin: 0;
                  color: #fff;
                `}
              >
                Sign in
              </h5>
            </button>
          </form>
        </div>
        <ReactModal isOpen={this.state.showModal}>
          <Modal user={this.state.user} />
        </ReactModal>
      </main>
    );
  }
}
