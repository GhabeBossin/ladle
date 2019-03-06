import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle} from 'reactstrap';
import FlashCardImg from './flash-card.png';
import './game.css';
import axios from 'axios';

class Game extends React.Component {
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

  // Post to user_words DB when a word is learned
  learnedCard = (user_id, en_word_id) => {
    axios.put("http://localhost:8080/learned", {
        user_id: user_id,
        en_word_id: en_word_id,
        is_known: true
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


  componentDidMount() {
    this.getCard(this.state.user_word_id)
  }

  // Update card and cue next card when word is learned
  checkMark = () => {
    let num = this.state.user_word_id;
    this.setState({
      user_word_id: num + 1
    })
    this.getCard(num + 1)
    this.setState({firstFlip: false, flipped: !this.state.flipped})
    this.learnedCard(this.state.user_id, num)
  }

  firstFlip = () => {
    this.setState({
      firstFlip: true,
      flipped  : true
    })
  }

  flip = () => {
    this.setState({
      flipped: !this.state.flipped
    });
  }

  render() {
  return (
    <Container>
      <Row>
        <Col>
        { !this.state.flipped
          ?
          <Card className="text-center flash-card front border-0">
            <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
            <CardBody className="card-img-overlay">
              <CardTitle className="flash-card-word">{ this.state.en_word }</CardTitle>
            </CardBody>
          </Card>
          :
          <Card className="text-center flash-card back border-0">
            <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
            <CardBody className="card-img-overlay">
              <CardTitle className="flash-card-word">{ this.state.es_word }</CardTitle>
            </CardBody>
          </Card>
        }
        </Col>
      </Row>
      <Row>
        <Col className="card-buttons">
        {/* When given a new card, only shows flip button until user clicks flip and sees the translation, then they see all three buttons to mark correct (checkmark) or incorrect (x mark), or flip again */}
          { !this.state.firstFlip
            ?
            <Button onClick={this.firstFlip} className="card-flip-btn">Flip</Button>
            :
            <ButtonGroup className="card-answer-btns">
              <Button>✘</Button>
              <Button onClick={this.flip}>Flip</Button>
              <Button onClick={this.checkMark}>✔</Button>
            </ButtonGroup> }
        </Col>
      </Row>
    </Container>
  );
  }
};

export default Game;
