import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label } from 'reactstrap'
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ""
    }
  }

  handleSubmit(e) {
    this.setState ({ name: this.input.value});

    let data = this.input.value;
    e.preventDefault();

    axios.post("http://localhost:8080/signup", {
      name: data,
    })
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
            <Label for="first_name">First Name</Label>
            <Input type="text" id="first_name" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input type="text" id="last_name" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" id="username" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <FormGroup>
            <Label for="pass">Password</Label>
            <Input type="password" id="pass" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <div></div>
          <Button type="submit" value="Submit">Signup</Button>
          <p>Already have an account? <Link to='/login'> Login here.</Link></p>
        </Form>
      </Container>
    );
  }
}

export default SignUp