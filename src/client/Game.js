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

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      en_word: "",
      es_word: "",
      user_word: "",
      user_word_id: null,
      user_id: 2
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    axios.get("http://localhost:8080/game", {
      params: {
        id: "this",
      }
    })
    .then((response) => {
      this.setState({en_word: response.data[0].rows[0].word })
      this.setState({es_word: response.data[1].rows[0].word })
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleFlip(e) {
  }

  render() {
    return (
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFlip: false,
      flipped  : false
    }
  };

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
              <Button>✔</Button>
            </ButtonGroup> }
        </Col>
      </Row>
    </Container>
  );
  }
};

export default Game;
