import React, { Component } from 'react'
import {
  Container,
  Table,
  Row,
  Col } from 'reactstrap'
  import { StyledTR } from '../../styles/adminStyles'
import WordEdit from './WordEdit'
// import SearchBar from './SearchBar'
import axios from 'axios';


class AdminWords extends Component {
  constructor() {
    super();
    this.state = {
      wordData: []
    };
  }

  componentDidMount() {
    this.getWordData()
  }

  getWordData = () => {
    axios.get("http://localhost:8080/api/words/all")
    .then((response) => {
      this.setState({wordData: [...response.data]});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateWord = (state) => {
    return axios.put("http://localhost:8080/api/wordEdit/update", {
      id     : state.id,
      en_word: state.en_word,
      es_word: state.es_word,
      enabled: state.enabled

    })
    .then(() => {
      console.log('Before .getWordData updates', this.state.wordData[0].enabled)
      this.getWordData()
    })
    .catch((error) => {
      console.log('Error in AdminWordEdit updateWord: ', error);
    });
  }

  mapRows = data => {
    return data.map((row, i) => {
      const { id, en_word, es_word, name, ranking } = row;
      return (
        <StyledTR key={ id } enabled={ data[i].enabled } >
          <th scope="row">{ id }</th>
          <td>{ en_word }</td>
          <td>{ es_word }</td>
          <td>{ name }</td>
          <td>{ ranking }</td>
          <td>
            <WordEdit updateWord={this.updateWord} data={ row } />
          </td>
        </StyledTR>
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
