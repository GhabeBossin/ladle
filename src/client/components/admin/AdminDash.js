import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Jumbotron } from 'reactstrap'
import HardWords from './HardWords'
import BadUsers from './BadUsers'

class AdminDash extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="display-3">Dashboard</h1>
            <hr className="my-2" />
            <p className="lead">Monitor overall learning data and student status here.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
            <HardWords />
            </Col>
            <Col>
            <BadUsers />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AdminDash
