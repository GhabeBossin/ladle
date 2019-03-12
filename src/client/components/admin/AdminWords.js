import React, { Component } from 'react'
import {
  Container,
  Table,
  Row,
  Col } from 'reactstrap'
import WordEdit from './WordEdit'
import styled from 'styled-components'
// import SearchBar from './SearchBar'
import axios from 'axios';

const StyledRows = styled.tr`
  ${ ({ enabled }) => (
    enabled === false ?
    `color: rgba(0, 0, 0, 0.5);`
    :
    `color: black;`
  )}
  & * {
    color: black
  }
`;

class AdminWords extends Component {
  constructor() {
    super();
    this.state = {
      wordData: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getWordData()
  }

  getWordData = () => {
    axios.get("http://localhost:8080/api/words/all")
    .then((response) => {
      console.log('RESPONSE IN getWordData', response)
      this.setState({wordData: [...response.data]});
      // console.log('STATE after setState in getWordData', this.state)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateWord = (state) => {
    console.log(state, "this is state")
    return axios.put("http://localhost:8080/api/wordEdit/update", {
      en_word: state.en_word,
      es_word: state.es_word,
      enabled: state.enabled,
      id:      state.id

    })
    .then((response) => {
      console.log(response, "reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
      this.getWordData()
      console.log('After .getWordData in .updateWord', this.state)
    })
    .catch((error) => {
      console.log('Error in AdminWordEdit updateWord: ', error);
    });
  }

  mapRows = data => {
    return data.map((row) => {
      const { id, en_word, es_word, name, ranking } = row;
      return (
        <StyledRows key={ id }>
          <th scope="row">{ id }</th>
          <td>{ en_word }</td>
          <td>{ es_word }</td>
          <td>{ name }</td>
          <td>{ ranking }</td>
          <td>
            <WordEdit updateWord={this.updateWord} data={ row }/>
          </td>
        </StyledRows>
    )})
  }

  render() {
    return (
      <Container>
        <h2>Words</h2>
        <Row>
          <Col>
            {/* <SearchBar /> */}
            <Table striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>English Word</th>
                  <th>Translation</th>
                  <th>Category</th>
                  <th>Difficulty Rating</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
              { this.mapRows(this.state.wordData) }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminWords
