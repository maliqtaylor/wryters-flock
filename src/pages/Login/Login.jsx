import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Button } from "semantic-ui-react";
import "./Login.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    const { email, pw } = this.state;
    return (
      <main className="Login">
        <h3>Log In</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            className="form-field"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            className="form-field"
          />
          <Button compact color="pink">
            Log In
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </form>
        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default LoginPage;
