import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
  Jumbotron,
  Container } from 'reactstrap'


class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <Container className='text-center'>
          <Jumbotron>
            <h2 className='display-3'>Welcome to Ladle</h2>
            <hr className='my-2' />
            <p className='lead'>Using a simple flashcard game, this app encourages you to learn a different language easily. Ready to get started?</p>
          </Jumbotron>
          <p>Already have an account? You can <Link to='/login'>login here.</Link></p>
          <p>Are you new here? Would you like to <Link to='/signup'>Signup?</Link></p>
        </Container>
      </>
    )
  }
}

export default Home