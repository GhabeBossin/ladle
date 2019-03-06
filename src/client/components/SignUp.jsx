import React, { Component } from 'react';
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
            <Label for="fname">First Name</Label>
            <Input type="text" id="fname" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input type="text" id="lname" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <FormGroup>
            <Label for="pass">Password</Label>
            <Input type="password" id="pass" ref={(input) => this.input = input} />
            <h1>{this.state.name} </h1>
          </FormGroup>
          <Button type="submit" value="Submit">Signup</Button>
        </Form>
        // already have an account? Link to='/login'
      </Container>
    );
  }
}

export default SignUp