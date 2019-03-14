import React, { Component } from 'react';
import { 
  Redirect, 
  Link } from 'react-router-dom'
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
    if (!this.state.usernameInput || !this.state.passwordInput) {
      return <Redirect to='/target' />
    }
    else {
      return axios.get("http://localhost:8080/api/users", {
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
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.handleSubmit()
    }
  }

  render() {
    return (<>
    { this.state.validated ?
      <Redirect to={{ pathname:'/game' }} />
      :
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" name='username' id="username" onChange={ this.handleInputChange } value={ this.state.usernameInput } />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="pass">Password</Label>
            <Input type="password" name='pass' id="pass" onChange={ this.handleInputChange } value={ this.state.passwordInput } onKeyUp={this.handleEnter}/>
          </FormGroup>
          <StyledDiv>
          <Button type="submit" onClick={ this.handleSubmit }>
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