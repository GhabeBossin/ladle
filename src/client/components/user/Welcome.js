import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import StyledSpan from '../styles/signInUpStyles'


class Welcome extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <StyledSpan>Already have an account? <Link to='/login'> Login here.</Link></StyledSpan>
        <StyledSpan>New here? Would you like to <Link to='/signup'>Signup?</Link></StyledSpan>
      </Container>
    )
  }
}

export default Welcome