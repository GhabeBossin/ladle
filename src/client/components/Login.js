import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label } from 'reactstrap'
import axios from 'axios';

class Login extends Component {
  constructor({ setCurrentUser }) {
    super();
    this.setCurrentUser = setCurrentUser;
    this.state = {
      validated: false,
      usernameInput: '',
      passwordInput: '',
      currentUser: {
        first_name: ''
      }
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    name === 'username' ?
    this.setState({
      usernameInput: value
    })
    :
    this.setState({
      passwordInput: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    return axios.get("http://localhost:8080/api/login/", {
      params: {
        username: this.state.usernameInput
      }
    })
    .then((response) => {
      this.setState({ validated: true },
        () => { this.setCurrentUser(response) });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (<>
    { this.state.validated
      ?
      <Redirect to='/' />
      :
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" name='username' id="username" onChange={ this.handleInputChange } value={ this.state.usernameInput } />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="pass">Password</Label>
            <Input type="password" name='pass' id="pass" onChange={ this.handleInputChange } value={ this.state.passwordInput } />
          </FormGroup>
          <Button type="button" onClick={ this.handleSubmit }>
            Login
          </Button>
        </Form>
        // New here? Would you like to Signup? Link to='/signup'
      </Container> }
    </>);
  }
}

export default Login