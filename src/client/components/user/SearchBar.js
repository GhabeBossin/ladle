import React, { Component } from 'react';
import axios from 'axios';
import FuzzySearch from '../helpers/FuzzySearch'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: this.props.data,
      es_word: '',
      en_word: '',
    }
  }

  handleClick = (word) => {
    axios.get('http://localhost:8080/api/words/search', {
      params: { id: word }
    })
    .then((response) => {
      this.setState({
        en_word: word,
        es_word: response.data[0].word
      })
      this.props.translation(response.data[0].word, word)
    })
    .catch((error) => {
      console.log('Error in getCard in Login.js: ', error);
    });
  }

  render () {
    return (
      <div>
        {this.props.data[0] && 
        <FuzzySearch name='query' placeholder='Translate' handleClick={ this.handleClick } data={ this.props.data } /> }
      </div>
    )
  }
};

export default SearchBar;