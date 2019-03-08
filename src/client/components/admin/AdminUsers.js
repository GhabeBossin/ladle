import React, { Component } from 'react'
import { Container, Table, Row, Col} from 'reactstrap'
// import SearchBar from './SearchBar'

class AdminUsers extends Component {
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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

export default AdminUsers
