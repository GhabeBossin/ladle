import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label } from 'reactstrap'
import {
  StyledDiv,
  StyledSpan } from '../styles/signInUpStyles'
import axios from 'axios';

class SignUp extends Component {
  constructor({ setCurrentUser }) {
    super();
    this.setCurrentUser = setCurrentUser;
    this.state = {
      allWords: [],
      userId: null,
      validated: false,
      firstNameInput: '',
      lastNameInput: '',
      usernameInput: '',
      passwordInput: '',
      currentUser: {
        first_name: ''
      }
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'first_name': 
        this.setState({
          first_name: value
        })
        break
      case 'last_name':
        this.setState({
          last_name: value
        })
        break
      case 'username':
        this.setState({
          username: value
        })
        break
      default:
        console.log('Invalid')
    }
  }

  handlePasswordChange = ({target}) => {
    const {type, value} = target;
    type === 'password' ?
    this.setState({
      password: value
    })
    : null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const firstData = this.state.firstNameInput;
    const lastData = this.state.lastNameInput;
    const unameData = this.state.usernameInput;
    const passData = this.state.passwordInput;

    return axios.post("http://localhost:8080/api/signup", {
      first_name: firstData,
      last_name: lastData,
      username: unameData,
      password: passData,
      achievements: false,
    })
    .then((response) => {
      this.setState({ validated: true },
        () => { this.setCurrentUser(response) }
      );
    })
    .catch((error) => {
      console.log('Error in Signup handleSubmit', error);
    });
  }

  render() {
    return (<>
      { this.state.validated
        ?
        <Redirect to={{
          pathname:'/',
          state: {currentUser: this.state.usernameInput}
          }} />
        :
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="first_name">First Name</Label>
              <Input type="text" name='first_name' id="first_name" onChange={ this.handleInputChange } value={ this.state.firstNameInput }/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="last_name">Last Name</Label>
              <Input type="text" name='last_name' id="last_name" onChange={ this.handleInputChange } value={ this.state.lastNameInput }/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" name='username' id="username" onChange={ this.handleInputChange } value={ this.state.usernameInput } />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="pass">Password</Label>
              <Input type="password" name='pass' id="pass" onChange={ this.handlePasswordChange } value={ this.state.passwordInput } />
            </FormGroup>
            <StyledDiv>
            <Button type="submit" onClick={ this.handleSubmit }>
              Signup
            </Button>
            <StyledSpan>Already have an account? <Link to='/login'> Login here.</Link></StyledSpan>
            </StyledDiv>
          </Form>
      </Container> }
    </>);
  }
}

export default SignUp