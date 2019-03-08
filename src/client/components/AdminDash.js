import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import DiffWords from './DifficultWords'

class AdminDash extends Component {
  render() {
    return (
      <Container>
        <h2>Dashboard</h2>
        <Row>
          <Col>
          <DiffWords />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminDash
