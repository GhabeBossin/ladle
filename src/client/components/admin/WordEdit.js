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

class WordEdit extends Component {
  constructor({updateWord, data}) {
    super();
    this.updateWord = updateWord;
    this.state = {
      id        : data.id,
      en_word   : data.en_word,
      es_word   : data.es_word,
      enabled   : data.enabled,
      modal_open: false
    };
  }

  handleInputChange = ({target}) => {
    const { name, value } = target;
    name === 'en_word' ?
    this.setState({
      en_word: value
    })
    :
    this.setState({
      es_word: value
    })
  }

  handleCheckboxChange = () => {
    this.state.enabled ?
    this.setState({
      enabled: false
    })
    :
    this.setState({
      enabled: true
    })
  }

  buttonToggle = () => {
    this.setState({ modal_open: !this.state.modal_open})
  }

  render() {
    return (<>
      <div onClick={this.buttonToggle}>
        ✏️
      </div>

      { this.state.modal_open && (
        <ModalContainer>
          <ModalWrapper className="p-4">
            <Container>
              <Button close onClick={this.buttonToggle}/>
              <h4 className='border-bottom mb-4'>Edit This Word</h4>
              <Form>
                <FormGroup>
                  <Label htmlFor="en_word">English</Label>
                  <Input type="text" name="en_word" id="en_word" value={ this.state.en_word } onChange={ this.handleInputChange }/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="es_word">Spanish</Label>
                  <Input type="text" name="es_word" id="es_word" value={ this.state.es_word } onChange={ this.handleInputChange }/>
                </FormGroup>
                <FormGroup check className='mb-3'>
                  <Label check>
                  <Input type="checkbox" onChange={this.handleCheckboxChange}/>{' '}
                  { this.state.enabled ?
                    "Disable Word"
                    :
                    "Enable Word"
                  }
                  </Label>
                  </FormGroup>
                <Button type="button"
                  onClick={() => {
                  this.updateWord(this.state),
                  this.buttonToggle() }}>
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

export default WordEdit