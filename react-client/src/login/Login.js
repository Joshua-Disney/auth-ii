import React from "react";
import Axios from "axios";

import "../css/Forms.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:4000/api/auth/login";

    Axios.post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChanges = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="loginFormContainer">
        <h1 className="loginHeading">Login</h1>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              className="loginInput"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChanges}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              className="loginInput"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChanges}
              type="password"
            />
          </div>
          <div>
            <button className="loginButton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
