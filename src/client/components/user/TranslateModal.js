import React, { Component } from 'react'
import { 
  ModalContainer,
  ModalWrapper } from '../styles/modalStyles';
import { 
  Button,
  Container } from 'reactstrap'

class TranslateModal extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <ModalContainer>
          <ModalWrapper>
            <Container>
              <Button close onClick={ this.props.closeTranslate }/>
              <div>
                <p>
                  {`${this.props.en_word} translates to ${this.props.es_word}`}
                </p>
              </div>
            </Container>
          </ModalWrapper>
        </ModalContainer>
      </div>
    )
  }
}

export default TranslateModal