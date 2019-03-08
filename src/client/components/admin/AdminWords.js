import React, { Component } from 'react'
import { Container, Table, Row, Col} from 'reactstrap'
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
      console.log(response)
      this.setState({wordData: [...response.data]});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  mapRows = data => {
    return data.map(({
      id, en_word, es_word, name, ranking
    }) => (
      <tr key={ id }>
        <th scope="row">{ id }</th>
        <td>{ en_word }</td>
        <td>{ es_word }</td>
        <td>{ name }</td>
        <td>{ ranking }</td>
        <td><img src='/public/icons/edit.png' width='5%'/></td>
      </tr>
    ))
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
