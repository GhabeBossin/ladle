import React, { Component } from 'react'
import { 
  ModalContainer,
  ModalWrapper,
  AlignX } from '../styles/modalStyles';

class TranslateModal extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <ModalContainer>
        <ModalWrapper>
          <AlignX close onClick={ this.props.closeTranslate }/>
          <span>
            {`${this.props.en_word} translates to ${this.props.es_word}`}
          </span>
        </ModalWrapper>
      </ModalContainer>
    )
  }
}

export default TranslateModal