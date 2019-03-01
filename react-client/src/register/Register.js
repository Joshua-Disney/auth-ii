import React from "react";
import Axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:4000/api/auth/register";

    Axios.post(endpoint, this.state)
      .then(res => {
        this.props.history.push("/login");
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
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
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
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChanges}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="department" />
            <input
              name="department"
              id="department"
              value={this.state.department}
              onChange={this.handleChanges}
              type="text"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
