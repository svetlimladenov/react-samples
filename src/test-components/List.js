import React from "react";
import { nanoid } from "nanoid";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { username: "bob", id: nanoid() },
        { username: "sue", id: nanoid() }
      ]
    };

    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser() {
    this.setState((state) => {
      return {
        users: [{ username: "Gosho", id: nanoid() }, ...state.users]
      };
    });
  }

  render() {
    // const { nums } = this.props;
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map((user, idx) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
        <button onClick={this.handleAddUser}>Add user</button>
      </div>
    );
  }
}

export default List;
