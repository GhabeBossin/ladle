import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Table,
  Row,
  Col,
  Button } from 'reactstrap'
// import { StyledTable } from '../../styles/adminWordsUsersStyles'

// import SearchBar from './SearchBar'
import axios from 'axios';

class AdminUsers extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = () => {
    axios.get("http://localhost:8080/api/users/all")
    .then((response) => {
      this.setState({userData: [...response.data]});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  mapRows = data => {
    return data.map(({
      id, first_name, last_name, username
    }) => (
      <tr key={ id }>
        <th scope="row">{ id }</th>
        <td >  { first_name }</td>
        <td >  { last_name }</td>
        <td >  { username }</td>
        <td>
          <Link to='/admin/:username/edit'>✏️</Link>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Container>
        <h2>Users</h2>
        <Row>
          <Col>
        {/* <SearchBar /> */}
            <Table striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                { this.mapRows(this.state.userData) }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminUsers
