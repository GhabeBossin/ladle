import React, { Component } from 'react'
import {
  CardText, 
  Button,
  Container } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper } from '../styles/modalStyles'
import {
  BtnDiv,
  DelBtn} from '../styles/adminStyles';

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
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
    )
  }
}

export default UserDelete