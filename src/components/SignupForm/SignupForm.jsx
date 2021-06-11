import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Button, Form, Container } from "semantic-ui-react";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <Container>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={this.handleChange}
                className="form-field"
              />
            </Form.Field>

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
                value={password}
                name="password"
                onChange={this.handleChange}
                className="form-field"
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="confirm"> Confirm Password </label>
              <input
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
                className="form-field"
              />
            </Form.Field>

            <Button compact color='pink' disabled={this.isFormInvalid()}>Sign Up</Button>
          &nbsp;&nbsp;
          <Link to="/" className='cancel'>Cancel</Link>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SignupForm;
