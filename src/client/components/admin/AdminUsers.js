import React, { Component } from 'react'
import {
  Container,
  Table,
  Row,
  Col } from 'reactstrap'
import { StyledTR } from "../../styles/adminStyles";
import axios from 'axios';
import UserEdit from './UserEdit';

class AdminUsers extends Component {
  constructor(props) {
    super(props);
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

  updateUser = (state) => { 
    return axios.put("http://localhost:8080/api/userEdit/update", {
      id        : state.id,
      username  : state.username,
      first_name: state.first_name,
      last_name : state.last_name,
      password  : state.password

    })
    .then(() => {
      // console.log('Before .getWordData updates', this.state.userData[0].enabled)
      this.getUserData()
    })
    .catch((error) => {
      console.log('Error in AdminUserEdit updateUser: ', error);
    });
  }

  mapRows = data => {
    // console.log('user1 @data[0]: ', data[0], ' \n user2 @data[1]: ', data[1], ' \n user3 @data[2]: ',data[2])
    return data.map((row, i) => {
      id, first_name, last_name, username
      const { id, first_name, last_name, username } = row;
      return (
        <StyledTR key={ id } >
          <th scope="row">{ id }</th>
          <td>{ first_name }</td>
          <td>{ last_name }</td>
          <td>{ username }</td>
          <td>
            {/* give currentUser.password to this so user can update their password if it is their account */}
            <UserEdit updateUser={this.updateUser} data={ row } currentUser={this.props.currentUser}/>
            {/* turn into delete user button, only appears in for rows not that user */}
            { this.props.currentUser.id === data[i].id ?
              console.log('currentUser.id: ', this.props.currentUser.id, 'data[i].id: ', data[i].id)
              :
              <span className="ml-2">❌</span>
            }
          </td>
      </StyledTR>
    )})
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
