import React, { Component } from 'react'
import { Container, Table, Row, Col} from 'reactstrap'
// import SearchBar from './SearchBar'
import axios from 'axios';


class AdminWords extends Component {
  constructor() {
    super();
    this.state = {
      wordData: [{
          id: '1',
          firstName: 'Trogdor',
          lastName: 'Burninator',
          wordName: '@BurninatingEverything',
        }]
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

  mapRows = data => {
    return data.map(({
      id, first_name, last_name, wordname
    }) => (
      <tr key={ id }>
        <th scope="row">{ id }</th>
        <td>{ first_name }</td>
        <td>{ last_name }</td>
        <td>{ wordname }</td>
        <td>(edit icon)</td>
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
                  <th>Difficulty Rating</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Pants</td>
                  <td>Pantalones</td>
                  <td>Easy</td>
                  <td>(edit icon)</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>(edit icon)</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>(edit icon)</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminWords
