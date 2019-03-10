import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  CardImg,
  CardTitle } from 'reactstrap';
import FlashCardImg from '../flash-card.png';
import axios from 'axios';
import { StyledBtnDiv, StyledCard, StyledCardBody, StyledCardButtons } from '../styles/gameStyles'
import Trophy from './AchievementTrophy';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trophies: [],
      x_words: [],
      user_word: "",
      en_word: "",
      es_word: "",
      userWords: [],
      userAchievements: [],
      user_word_id: 1,
      user_id: null,
      firstFlip: false,
      flipped  : false,
      url: 'http://localhost:8080/api'
    }
  }

  // Load first card from currentUser information and set user_id in state
  componentDidMount() {
    this.setState({ userAchievements: this.props.achievements }),
    this.setState({ user_id: this.props.id })
    this.drawNewCard(this.props.id)
    this.userWord(this.props.id)
    // this.getAchievements(this.props.id)
  }

  // Get user achievements from user_achievements table
  // getAchievements = (user_id) => {
  //   axios.get('http://localhost:8080/userAchievements', {
  //     params: {
  //       id: user_id
  //     }
  //   })
  //   .then((response) => {
  //     const achievements = response.data;
  //     const userAchievements = [];
  //     achievements.forEach(element => {
  //       userAchievements.push(element.achievements_id)
  //     })
  //     this.setState({ userAchievements: userAchievements })
  //   })
  // }

  // trophyNames = (achievement_id) => {
  //   axios.get('http://localhost:8080/trophyNames', {
  //     params: {
  //       id: achievement_id
  //     }
  //   })
  //   .then((response) => {
  //     this.setState({ trophies: response.data })
  //   })
  // }

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
      // console.log(response)
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
    this.setState({firstFlip: false, isFlipped: false})
  }

  // User doesn't know the card and clicks the x mark, increase difficulty of card in en_cards table
  xMark = () => {
    let num = this.state.user_word_id;
    this.updateWord(num, -1);
    this.markedCard();
    this.state.x_words.push(num);
  }

  // Update card and cue next card when word is learned
  checkMark = () => {
    let num = this.state.user_id;
    this.updateWord(num, 1);
    this.markedCard();
    this.learnedCard(num, 1)
    // this.trophyNames(userAchievements);
    // console.log(this.state.userAchievements)

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

  // trophy = () => {
  //   let userAchievements = []
  //   let achievements = this.state.userAchievements;
  //   achievements.forEach(element => {
  //     userAchievements.push(<td><img src={element}/></td>)
  //   });
  //   console.log(achievements)
  //   return userAchievements
  // }

  render() {
    return (
      <Container>
        <div>
        <Row>
          <Col>
          { !this.state.isFlipped
            ?
            <StyledCard>
              <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
              <StyledCardBody>
                <CardTitle className="flash-card-word">{ this.state.en_word }</CardTitle>
              </StyledCardBody>
            </StyledCard>
            :
            <StyledCard>
              <CardImg top width="100%" src={ FlashCardImg } alt="Card image cap" />
              <StyledCardBody>
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
        </div>
        <div>
          <Trophy data={this.state.userAchievements} />
        </div>
      </Container>
    );
  }
};

export default Game;