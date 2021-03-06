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
          firstNameInput: value
        })
        break
      case 'last_name':
        this.setState({
          lastNameInput: value
        })
        break
      case 'username':
        this.setState({
          usernameInput: value
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
        passwordInput: value
      })
    : null
  }

  populateUserWords = (id, cb) => {
    return axios.get("http://localhost:8080/api/signup/allWords" )
    .then((response) => {
      let data = response.data
      let words = []

      data.map((element) => {
        words.push({ users_id: id, en_words_id: element.id, is_known: false })
      })
    
      axios.post("http://localhost:8080/api/signup/userWords", {
        data: words,
        is_known: false
      })
      .then(() => {
        axios.put("http://localhost:8080/api/signup/isNew", {
          new_user: false,
          id: id
        })
      })
    })
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
      achievements: true,
    })
    .then((response) => {
      this.setState({ validated: true },
        () => { this.setCurrentUser(response) }
      );
      this.populateUserWords(response.data[0].id)
      axios.post('http://localhost:8080/api/signup/newAward', {
        id: response.data[0].id,
        achievement: 4
      })
    })
    .catch((error) => {
      console.log('Error in Signup handleSubmit', error);
    });
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.handleSubmit()
    }
  }

  render() {
    return (<>
      { this.state.validated === true ?
        <Redirect to={{ pathname:'/game' }} />
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
              <Label htmlFor='password'>Password</Label>
              <Input type='password' name='password' id="password" onChange={ this.handlePasswordChange } value={ this.state.passwordInput } onKeyUp={this.handleEnter}/>
            </FormGroup>
            <StyledDiv>
              <Button type="submit" onClick={ this.handleSubmit }>
                Signup
              </Button>
              <StyledSpan>Already have an account? <Link to='/login'> Login here.</Link></StyledSpan>
            </StyledDiv>
          </Form>
        </Container> 
      }
    </>);
  }
}

export default SignUp