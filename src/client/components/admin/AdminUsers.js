import React, { Component } from 'react'
import {
  Container,
  Table,
  Row,
  Col } from 'reactstrap'
import { StyledTR } from "../../styles/adminStyles";
import axios from 'axios';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete'

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
      this.getUserData()
    })
    .catch((error) => {
      console.log('Error in AdminUsers updateUser method: ', error);
    });
  }

  deleteUser = (state) => {
    return axios.delete("http://localhost:8080/api/userEdit/delete", {
      data: {
      id: state.id,
      }// username: state.username,
    })
    .then((response) => {
      console.log(response)
      // const userData = response.data;
      // this.setState({ userData });
      // this.setState({userData: [...response.data]});
    })
    .then(() => {
      this.getUserData()
    })
    .catch((error) => {
      console.log('Error in AdminUser deleteUser: ', error);
    });
  }

  mapRows = data => {
    return data.map((row, i) => {
      const { id, first_name, last_name, username } = row;
      return (
        <StyledTR key={ id } >
          <th scope="row">{ id }</th>
          <td>{ first_name }</td>
          <td>{ last_name }</td>
          <td>{ username }</td>
          <td>
            <UserEdit updateUser={this.updateUser} data={ row } currentUser={this.props.currentUser}/>
            { this.props.currentUser.id !== data[i].id ?
              <UserDelete deleteUser={this.deleteUser} data={ row }/>
              : null
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