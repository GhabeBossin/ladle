import React, { Component } from 'react'
import {
  ListGroup,
  ListGroupItem } from 'reactstrap'

class DiffWords extends Component {
  render() {
    return (
      <div>
        <h3>
          Difficult Words
        </h3>
        <p>
          These are the words that learners are currently struggling with the most.
        </p>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
      </div>
    )
  }
}

export default DiffWords
