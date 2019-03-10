import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import {
  Container,
  Button,
  FormGroup,
  Form,
  Input,
  Label } from 'reactstrap'
import {
  StyledDiv,
  StyledSpan } from '../styles/signInUpStyles'
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

    return axios.get("http://localhost:8080/api/users", {
      params: {
        username: this.state.usernameInput
      }
    })
    .then((response) => {
      console.log('HELLO RESPONSE', response)
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
          <StyledDiv>
            <Button type="button" onClick={ this.handleSubmit }>
              Login
            </Button>
            <StyledSpan>New here? Would you like to <Link to='/signup'>Signup?</Link></StyledSpan>
          </StyledDiv>
        </Form>
      </Container> }
    </>);
  }
}

export default Login