import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Table,
  Row,
  Col } from 'reactstrap'
import axios from 'axios';

class AdminWordEdit extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }

  render() {
    return (
      <Container>
        <h2>This is the Admin Word Edit Page</h2>
      </Container>
    )
  }
}

export default AdminWordEdit