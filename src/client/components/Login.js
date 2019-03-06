import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label } from 'reactstrap'
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      passwordInput: '',
      currentUser: {
        name: ''
      }
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    name === 'fname' ?
    this.setState({
      nameInput: value
    })
    :
    this.setState({
      passwordInput: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:8080/api/login/${this.state.nameInput}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="fname">First Name</Label>
            <Input type="text" name='fname' id="fname" onChange={ this.handleInputChange } value={ this.state.nameInput } />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="pass">Password</Label>
            <Input type="password" name='pass' id="pass" onChange={ this.handleInputChange } value={ this.state.passwordInput } />
          </FormGroup>
          <Button type="button" onClick={ this.handleSubmit }>Login</Button>
        </Form>
        // New here? Would you like to Signup? Link to='/signup'
      </Container>
    );
  }
}

export default Login