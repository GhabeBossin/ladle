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
            <Card className="text-center flash-card front border-0">
              <CardImg top width="100%" src={FlashCardImg} alt="Card image cap" />
              <CardBody className="card-img-overlay">
                <CardTitle className="flash-card-word">Eat Shit (eng word on front of card)</CardTitle>
              </CardBody>
            </Card>
            :
            <Card className="text-center flash-card back border-0">
              <CardImg top width="100%" src={FlashCardImg} alt="Card image cap" />
              <CardBody className="card-img-overlay">
                <CardTitle className="flash-card-word">Como Mierda (spanish word on back of card)</CardTitle>
              </CardBody>
            </Card>
          }
          </Col>
        </Row>
        <Row>
          <Col className="card-buttons">
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