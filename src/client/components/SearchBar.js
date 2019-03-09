import React, { Component } from 'react';
import { Form, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import axios from 'axios';

class SearchBar extends Component {
   constructor(props) {
     super(props)
     this.handleClick = this.handleClick.bind(this);
   }
  handleClick(e) {
    e.preventDefault();
    let wordToLookup = event.currentTarget.query.value

    axios.get("http://localhost:8080/api/words/search", {
      params: {
        id: wordToLookup
      }
    })
    .then((response) => {

      alert("The translation for " + " " + `"${wordToLookup}"` + " is " + `"${response.data[0].word}"`)
      // this.setState({en_word: response.data[0].rows[0].word })
      // this.setState({es_word: response.data[1].rows[0].word })
    })
    .catch(function (error) {
      console.log("this is error is in getCard in Login.js", error);
    });
  }
  
  render () {
    return (
      <div>
        <Form onSubmit={ this.handleClick }>
          <InputGroup>
            <Input name='query' />
            <InputGroupAddon addonType="append">
              <Button type="submit"  color="primary">Search</Button>
            </InputGroupAddon>
          </InputGroup>
          </Form>
      </div>)
  }
};

export default SearchBar;