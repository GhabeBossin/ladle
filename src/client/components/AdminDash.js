import React, { Component } from 'react'
import { Container } from 'reactstrap'
import AdminNav from './AdminNav'

class AdminDash extends Component {
  render() {
    return (
      <Container>
        <AdminNav />
        <h1>I'm the Admin Dashboard!</h1>
      </Container>
    )
  }
}

export default AdminDash
