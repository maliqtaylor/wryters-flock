import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Button, Form, Container } from "semantic-ui-react";
import "./Login.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  handleChange = (e) => {
    console.log(e.target.name)
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
        <Container text>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor="email"> Email </label>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                className="form-field"
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={pw}
                name="pw"
                onChange={this.handleChange}
                className="form-field"
              />
            </Form.Field>
            <Button compact color="pink">
              Log In
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/" className='cancel'>Cancel</Link>
          </Form>
        </Container>
        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default LoginPage;
