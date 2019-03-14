import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button } from 'reactstrap'
import { 
  ModalContainer, 
  ModalWrapper,
  AlignX } from '../styles/modalStyles'

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

  modalToggle = () => {
    this.setState({ modal_open: !this.state.modal_open})
  }

  render() {
    return (<>
      <div onClick={this.modalToggle}>
        ✏️
      </div>

      { this.state.modal_open && (
        <ModalContainer>
          <ModalWrapper>
            <AlignX close onClick={this.modalToggle}/>
            <h4 className='border-bottom mb-3'>Edit This Word</h4>
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
                this.modalToggle() }}>
                Update
              </Button>
            </Form>
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
    )
  }
}

export default WordEdit