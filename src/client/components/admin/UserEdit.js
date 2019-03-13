import React, { Component } from 'react'
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper } from '../styles/modalStyles'

class UserEdit extends Component {
  constructor({updateUser, data, currentUser}) {
    super();
    this.updateUser = updateUser;
    this.state = {
      id           : data.id,
      username     : data.username,
      first_name   : data.first_name,
      last_name    : data.last_name,
      password     : data.password,
      is_admin     : data.is_admin,
      CUid         : currentUser.id,
      // mode_setting : data.game_mode,
      // group        : data.group,
      modal_open   : false
    };
  }

  handleInputChange = ({target}) => {
    const { name, value } = target;
    switch (name) {
      case 'first_name': 
        this.setState({
          first_name: value
        })
        break
      case 'last_name':
        this.setState({
          last_name: value
        })
        break
      case 'username':
        this.setState({
          username: value
        })
        break
      default:
        console.log('Invalid')
    }
  }

  modalToggle = () => {
    this.setState({ modal_open: !this.state.modal_open })
  }

  render() {
    return (<>
      {/* cursor: pointer */}
      <span onClick={this.modalToggle}>
        ✏️
      </span>

      { this.state.modal_open && (
        <ModalContainer>
          <ModalWrapper className="p-4">
            <Container>
              <Button close onClick={this.modalToggle}/>
              <h4 className='border-bottom mb-4'>Edit This User</h4>
              <Form>
                <FormGroup>
                  <Label htmlFor="first_name">First Name</Label>
                  <Input type="text" name="first_name" id="first_name" value={ this.state.first_name } onChange={ this.handleInputChange }/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input type="text" name="last_name" id="last_name" value={ this.state.last_name } onChange={ this.handleInputChange }/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" name="username" id="username" value={ this.state.username } onChange={ this.handleInputChange }/>
                </FormGroup>
                { this.state.id === this.props.currentUser.id ?
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="text" name="password" id="password" value={ this.state.password } onChange={ this.handleInputChange }/>
                  </FormGroup>
                  : console.log('this.props.currentUser.id: ', this.props.currentUser.id)
                }
                <Button type="button"
                  onClick={() => {
                  this.updateUser(this.state)
                  this.modalToggle() }}> 
                  Update 
                </Button>
              </Form>
            </Container>
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
    )
  }
}

export default UserEdit
