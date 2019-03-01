import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const endpoint = "http://localhost:4000/api/users";
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: { authorization: token }
    };

    axios
      .get(endpoint, reqOptions)
      .then(res => {
        this.setState({ users: res.data.users });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>List of Users</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
