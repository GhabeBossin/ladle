import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  CardImg,
  CardTitle } from 'reactstrap';
import FlashCardImg from '../../flash-card.png'
import { 
  StyledBtnDiv, 
  StyledCard, 
  StyledCardBody, 
  StyledCardButtons } from '../styles/gameStyles'
import Trophy from './AchievementTrophy';
import axios from 'axios';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
      userAchievements: [],
      user_word_id: null,
      user_id: null
      },
      en_word: '',
      es_word: '',
      userWords: [],
      currentWord: null,
      populateWords: [],
      firstFlip: false,
      flipped  : false,
      url: 'http://localhost:8080/api'
    }
  }

  // Load first card from currentUser information and set user_id in state
  componentDidMount() {
    this.setState({ currentUser: this.props.data })
    this.userWord(this.props.data.id)
    this.setState({ achievements: this.props.data.achievements})
  }

  //  Populate user words array in state
  userWord = (user_id, url) => {
    return axios.get('http://localhost:8080/api/userWord', {
      params: {
        id: user_id
      }
    })
    .then((response) => {
      let words = response.data;
      const userWords = [];

      words.forEach(element => {
        userWords.push(element.en_words_id)
        this.setState({ userWords: userWords, currentWord: userWords[0] } )
      })
      this.drawNewCard(this.state.userWords[0])
    })
  }

  // Get the proper card from the deck for current user that is rendered on the page
  drawNewCard = (user_word_id) => {
    return axios.get('http://localhost:8080/game', {
      params: { id: user_word_id }
    })
    .then((response) => {
      this.setState({ en_word: response.data[0].rows[0].word })
      this.setState({ es_word: response.data[1].rows[0].word })
    })
    .catch(function (error) {
      console.log('Error in getCard in Game.js: ', error);
    });
  }

  // Post to user_words DB when a word is learned
  learnedCard = (en_word_id, increment) => {
    axios.put('http://localhost:8080/api/learned', {
      user_id: this.state.currentUser.id,
      en_word_id: en_word_id,
      is_known: true,
      increment: increment
    })
    .then((response) => {
      let played = response.data[0].cards_played + 1
      if (played % 5 === 0) {
        axios.post(this.state.url + '/userAchievements/awards', {
          user_id: this.state.currentUser.id,
          award_id: (played / 5)
      })
        .then(() => {
        axios.get('http://localhost:8080/api/users', {
          params: {
          username: this.state.currentUser.username
          }
        })
          .then((response) => {
            let obj = response.data;
            let achievements = this.state.achievements.splice();
            obj.forEach(element => {
              achievements.push({ id: element.achievement_id, name: element.achievement_name, description: element.achievement_description })
            })
            this.setState({ achievements: achievements })
          })
        })
      }
    })
    .catch(function (error) {
      console.log('Error in learnedCard in Game.js: ', error);
    });
    
  }

  // Increment the difficulty counter for the en_word
  updateWord = (wordID, counter) => {
    axios.put('http://localhost:8080/updateWord', {
      id: wordID,
      diff: counter
    })
  }

  // Take word and place it further into the words array
  arrayMove = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };

  // Grab new word and reset state of card
  markedCard = (increment, state) => {
    let num = state;
    this.setState({ userWords: state, currentWord: state[0] })
    this.updateWord(num[0], increment)
    this.drawNewCard(state[0])
    this.setState({firstFlip: false, isFlipped: false})
  }

  // User doesn't know the card and clicks the x mark, increase difficulty of card in en_cards table
  xMark = () => {
    let num = this.state.userWords.slice();
    const newArray = this.arrayMove(num, 0, 2)
    this.markedCard(-1, newArray);
  }

  // Update card and cue next card when word is learned
  checkMark = () => {
    let newWords = this.state.userWords.slice();
    newWords.splice(0, 1)
    this.markedCard(1, newWords)
    this.learnedCard(this.state.currentWord, 1)
  
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
      return ( <>
        { !this.props.data.first_name ?
          <Redirect to={{ pathname:'/' }} />
          :
          <Container>
            <div>
            <Row>
              <Col>
              { !this.state.isFlipped
                ?
                <StyledCard>
                  <CardImg top width='100%' src={ FlashCardImg } alt='Card image cap' />
                  <StyledCardBody>
                    <CardTitle className='flash-card-word'>{ this.state.en_word }</CardTitle>
                  </StyledCardBody>
                </StyledCard>
                :
                <StyledCard>
                  <CardImg top width='100%' src={ FlashCardImg } alt='Card image cap' />
                  <StyledCardBody>
                    <CardTitle className='flash-card-word'>{ this.state.es_word }</CardTitle>
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
              <Trophy data={this.state.achievements} />
            </div>
          </Container>
        }
      </>
    );
  }
};

export default Game;