import React, { Component } from 'react'
import {
  Card,
  CardText,
  ListGroup,
  ListGroupItem } from 'reactstrap'

class HardWords extends Component {
  render() {
    return (
      <Card body>
        <h4>Difficult words</h4>
        <CardText>
          These words are the most difficult for students to learn, overall.
        </CardText>
        <ListGroup flush>
          <ListGroupItem>Supercalafragalistic</ListGroupItem>
          <ListGroupItem>Hippopotomous</ListGroupItem>
          <ListGroupItem>Serendipitous</ListGroupItem>
          <ListGroupItem>Defenistrate</ListGroupItem>
          <ListGroupItem>Exceptional</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

export default HardWords
