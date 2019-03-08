import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import HardWords from './HardWords'
import BadUsers from './BadUsers'

class AdminDash extends Component {
  render() {
    return (
      <Container>
        <div>
          <h3>Dashboard</h3>
          <p>
            Monitor overall learning data and student status here.
          </p>
        </div>
        <Row>
          <Col>
          <HardWords />
          </Col>
          <Col>
          <BadUsers />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminDash
