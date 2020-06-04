import React from "react";

export default class LoginForm extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsernameChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePasswordChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.defaultProps = {
  username: "",
  password: ""
}