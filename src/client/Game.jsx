import React from 'react';
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
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get("http://localhost:8080/game", {
      params: {
        ranking: 1
      }
    })
    .then((response) => {
      this.setState({en_word: response.data[0].rows[0].word })
      this.setState({es_word: response.data[1].rows[0].word })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>{this.state.en_word} </h1>
      <h1>{this.state.es_word} </h1>
      <button id='flip'>FLIP</button>
      </div>
    );
  }
}
