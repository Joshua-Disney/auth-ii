import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import Register from "./register/Register";
import Login from "./login/Login";
import Users from "./users/Users";

import "./App.css";

class App extends Component {
  logout = () => {
    localStorage.removeItem("jwt");

    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/register">Register</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
