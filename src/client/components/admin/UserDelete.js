import React, { Component } from 'react'
import { 
  Card,
  CardText, 
<<<<<<< HEAD
  Button,
  Container } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper, 
  BtnDiv,
  DelBtn} from '../../styles/adminStyles';
=======
  Button } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper } from '../../styles/adminStyles';
>>>>>>> parent of 7e9c489... added seeds

class UserDelete extends Component {
  constructor({deleteUser, data}) {
    super();
    this.deleteUser = deleteUser
    this.state = {
      id        : data.id,
      username  : data.username,
      modal_open: false
    }
  }

  buttonToggle = () => {
    this.setState({ modal_open: !this.state.modal_open})
  }

  render() {
    return(<>
      <span onClick={this.buttonToggle} className="ml-2">
        ❌
      </span>
      
      { this.state.modal_open && (
        <ModalContainer>
          <ModalWrapper>
            <Container>
              <Button close onClick={this.buttonToggle}/>
<<<<<<< HEAD
                <h3>Are You Sure?</h3>
                <CardText>This action cannot be undone!</CardText>
                <BtnDiv>
                  <Button onClick={this.buttonToggle}>Cancel</Button>
                  <DelBtn 
                    onClick={() => {
                    this.deleteUser(this.state)
                    this.buttonToggle() }}> 
                    Delete User 
                  </DelBtn>
                </BtnDiv>
            </Container>
=======
              <h3>Are You Sure?</h3>
              <CardText>This action cannot be undone!</CardText>
              <Button onClick={this.buttonToggle}>Cancel</Button>
              <Button 
                  onClick={() => {
                    console.log('UserDelete state', this.state)
                  this.deleteUser(this.state)
                  this.buttonToggle() }}> 
                Delete User 
              </Button>
            </Card>
>>>>>>> parent of 7e9c489... added seeds
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
    )
  }
}

export default UserDelete