import React, { Component } from 'react'
import {
  Button,
  Card,
  CardText,
  ListGroup,
  ListGroupItem } from 'reactstrap'

class BadUsers extends Component {
  render() {
    return (
      <Card body>
        <h4>Struggling Students</h4>
        <CardText>
          These students are struggling the most to learn new words.
        </CardText>
        <ListGroup flush>
          <ListGroupItem>Tim Timmeh</ListGroupItem>
          <ListGroupItem>Anne Bolin</ListGroupItem>
          <ListGroupItem>David Tennant</ListGroupItem>
          <ListGroupItem>Another Student</ListGroupItem>
          <ListGroupItem>John Doe</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

export default BadUsers