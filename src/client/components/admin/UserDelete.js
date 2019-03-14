import React, { Component } from 'react'
import {
  CardText, 
  Button,
  Container } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper,
  AlignX } from '../styles/modalStyles'
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
            <AlignX close onClick={this.buttonToggle}/>
            <h4 className='border-bottom mb-2'>Are You Sure?</h4>
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
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
    )
  }
}

export default UserDelete