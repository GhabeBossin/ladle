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
import { StyledBtnDiv, StyledCard, StyledCardBody, StyledCardButtons } from '../styles/gameStyles'

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
            <StyledCard>
              <CardImg top width="100%" src={FlashCardImg} alt="Card image cap" />
              <StyledCardBody>
                <CardTitle className="flash-card-word">Eat Shit (eng word on front of card)</CardTitle>
              </StyledCardBody>
            </StyledCard>
            :
            <StyledCard>
              <CardImg top width="100%" src={FlashCardImg} alt="Card image cap" />
              <StyledCardBody className="card-img-overlay">
                <CardTitle className="flash-card-word">Como Mierda (spanish word on back of card)</CardTitle>
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
                <Button>✘</Button>
                <Button onClick={this.flip}>Flip</Button>
                <Button>✔</Button>
              </ButtonGroup> }
          </StyledCardButtons>
        </StyledBtnDiv>
      </Container>
    );
  }
};

export default Game;