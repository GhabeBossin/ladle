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
      x_words: [],
      user_word: "",
      en_word: "",
      es_word: "",
      userWords: [],
      user_word_id: 1,
      user_id: null,
      firstFlip: false,
      flipped  : false,
      url: 'http://localhost:8080/api'
    }
  }

  // Load first card from currentUser information and set user_id in state
  componentDidMount() {
    this.setState({ user_id: this.props.id })
    this.drawNewCard(this.props.id)
    this.userWord(this.props.id)
  }

  //  Populate user words array in state
  userWord = (user_id, url) => {
    axios.get('http://localhost:8080/userWord', {
      params: {
        id: user_id
      }
    })
    .then((response) => {
      let words = response.data;
      const userWords = [];
      words.forEach(element => {
        userWords.push(element.en_words_id)
        this.setState({ userWords: userWords })
      })
    })
  }

  // Post to user_words DB when a word is learned
  learnedCard = (user_id, en_word_id) => {
    axios.put("http://localhost:8080/learned", {
        user_id: user_id,
        en_word_id: en_word_id,
        is_known: true
    })
    .then((response) => {
      console.log(response)
    })
    .catch(function (error) {
      console.log("this error is from learnedCard in Game.js", error);
    });
  }

  // Increment the difficulty counter for the en_word
  updateWord = (wordID, counter) => {
    axios.put("http://localhost:8080/updateWord", {
      id: wordID,
      diff: counter
    })
  }

  // Get the proper card from the deck for current user that is rendered on the page
  drawNewCard = (user_word_id) => {
    console.log("cards", this.state.user_id)
    axios.get("http://localhost:8080/game", {
      params: {
        id: user_word_id,
      }
    })
    .then((response) => {
      // console.log(response.data.rows[0])
      this.setState({en_word: response.data[0].rows[0].word })
      this.setState({es_word: response.data[1].rows[0].word })
    })
    .catch(function (error) {
      console.log('help')
      console.log("this is error is in getCard in Game.js", error);
    });
  }

  // Grab new word and reset state of card
  markedCard = () => {
    let num = this.state.user_word_id;
    this.setState({
      user_word_id: num + 1
    })
    this.drawNewCard(num + 1)
    this.setState({firstFlip: false, flipped: this.state.flipped})
  }

  // User doesn't know the card and clicks the x mark, increase difficulty of card in en_cards table
  xMark = () => {
    let num = this.state.user_word_id;
    this.updateWord(num, -1);
    this.markedCard()
    this.state.x_words.push(num)
  }

  // Update card and cue next card when word is learned
  checkMark = () => {
    let num = this.state.user_id;
    this.updateWord(num, 1);
    this.markedCard();
    this.learnedCard(num, 1)
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
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          { !this.state.isFlipped
            ?
            <StyledCard className="text-center flash-card front border-0 shadow">
              <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
              <StyledCardBody className="card-img-overlay">
                <CardTitle className="flash-card-word">{ this.state.en_word }</CardTitle>
              </StyledCardBody>
            </StyledCard>
            :
            <StyledCard className="text-center flash-card back border-0 shadow">
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
            <Button onClick={this.firstFlip}>Flip</Button>
            :
            <ButtonGroup>
              <Button onClick={ this.xMark }>✘</Button>
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