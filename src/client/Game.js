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
          <Card className={ `${this.state.flipped ? '' : 'animated flipOutX'} text-center flash-card front border-0` }>
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