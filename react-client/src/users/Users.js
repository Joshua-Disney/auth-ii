import React from "react";
import axios from "axios";

import requiresAuth from "../auth/requiresAuth";

import "./Users.css";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(res => {
        this.setState({ users: res.data.users });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="usersContainer">
        <ul className="userSection">
          {this.state.users.map(user => (
            <li className="userCard" key={user.id}>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default requiresAuth(Users);
