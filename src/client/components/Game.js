import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  CardImg,
  CardTitle} from 'reactstrap';
import FlashCardImg from '../flash-card.png';
// import './game.css';
import axios from 'axios';
import { StyledBtnDiv, StyledCard, StyledCardBody, StyledCardButtons } from '../styles/gameStyles'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en_word: "",
      es_word: "",
      user_word: "",
      user_word_id: 1,
      user_id: 2,
      firstFlip: false,
      flipped  : false
    }
  }

  componentDidMount() {
    this.getCard(this.state.user_word_id)
  }

  // Post to user_words DB when a word is learned
  learnedCard = (user_id, en_word_id) => {
    axios.put("http://localhost:8080/learned", {
        user_id: user_id,
        en_word_id: en_word_id,
        is_known: true
    })
  }

  updateWord = (wordID, counter) => {
    axios.put("http://localhost:8080/updateWord", {
      id: wordID,
      diff: counter
    })
  }

  // Get the proper card from the deck for current user
  getCard = (user_word_id) => {
    axios.get("http://localhost:8080/game", {
      params: {
        id: user_word_id,
      }
    })
    .then((response) => {
      this.setState({en_word: response.data[0].rows[0].word })
      this.setState({es_word: response.data[1].rows[0].word })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  marked = () => {
    let num = this.state.user_word_id;
    this.setState({
      user_word_id: num + 1
    })
    this.getCard(num + 1)
    this.setState({firstFlip: false, flipped: this.state.flipped})
  }

  exMark = () => {
    let num = this.state.user_word_id;
    this.updateWord(num, -1);
    this.marked()
  }

  // Update card and cue next card when word is learned
  checkMark = () => {
    let num = this.state.user_word_id;
    this.updateWord(num, 1);
    this.marked();
    this.learnedCard(this.state.user_id, num)
  }

  firstFlip = () => {
    this.setState({
      firstFlip: true,
      isFlipped  : true
    })
  }

  flip = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
    console.log(this.state.isFlipped)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          { !this.state.isFlipped
            ?
            <StyledCard className="text-center flash-card front border-0">
              <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
              <StyledCardBody className="card-img-overlay">
                <CardTitle className="flash-card-word">{ this.state.en_word }</CardTitle>
              </StyledCardBody>
            </StyledCard>
            :
            <StyledCard className="text-center flash-card back border-0">
              <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
              <StyledCardBody className="card-img-overlay">
                <CardTitle className="flash-card-word">{ this.state.es_word }</CardTitle>
              </StyledCardBody>
            </StyledCard>
          }
          </Col>
        </Row>
        <StyledBtnDiv>
          <StyledCardButtons>
          { !this.state.firstFlip
            ?
            <Button onClick={this.firstFlip} className="card-flip-btn">Flip</Button>
            :
            <ButtonGroup className="card-answer-btns">
              <Button onClick={ this.exMark }>✘</Button>
              <Button onClick={ this.flip }>Flip</Button>
              <Button onClick={ this.checkMark }>✔</Button>
            </ButtonGroup> }
          </StyledCardButtons>
        </StyledBtnDiv>
      </Container>
    );
  }
};

export default Game;
