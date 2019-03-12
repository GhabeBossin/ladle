import React, { Component } from 'react'
import {
  Card,
<<<<<<< HEAD
  CardText,
  Button } from 'reactstrap'
import {
  ModalContainer,
  ModalWrapper } from '../../styles/adminStyles';
=======
  CardText, 
  Button,
  Container } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper, 
  BtnDiv,
  DelBtn} from '../../styles/adminStyles';
>>>>>>> d0b17f28fcb3b07515343f1d439c59a848934f9a

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
              <Button onClick={this.buttonToggle}>Cancel</Button>
              <Button
                  onClick={() => {
                    console.log('UserDelete state', this.state)
                  this.deleteUser(this.state)
                  this.buttonToggle() }}>
                Delete User
              </Button>
            </Card>
=======
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
>>>>>>> d0b17f28fcb3b07515343f1d439c59a848934f9a
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
    )
  }
}

export default UserDelete