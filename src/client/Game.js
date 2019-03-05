import React from 'react';
import {Container, Row, Col, Button, ButtonGroup, Card, CardImg, CardBody,
  CardTitle} from 'reactstrap';
import FlashCardImg from './flash-card.png';
import './game.css';



const Game = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center flash-card front border-0">
            <CardImg top width="100%" src={FlashCardImg} alt="Card image cap" />
            <CardBody className="card-img-overlay">
              <CardTitle className="flash-card-word">Pants (eng word on front of card)</CardTitle>
            </CardBody>
          </Card>
          <Card className="text-center flash-card back border-0">
            <CardImg top width="100%" src={FlashCardImg} alt="Card image cap" />
            <CardBody className="card-img-overlay">
              <CardTitle className="flash-card-word">Pantalones (spanish word on back of card)</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        {/* When given a new card, only shows flip button until user user clicks flip and sees the translation, then they see all three buttons to mark correct (checkmark) or incorrect (x mark), or flip again */}
          <Button className="card-flip-btn">Flip</Button>
          <ButtonGroup className="card-answer-btns">
            <Button>✘</Button>
            <Button>Flip</Button>
            <Button>✔</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;