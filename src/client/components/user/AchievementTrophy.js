import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardText,
  CardDeck,
  Row,
  Col } from 'reactstrap'

class Trophy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.data) {
      const achievements = this.props.data.map((element, i) =>
        <Card key={i}>
          <CardHeader>{`${element.name}`}</CardHeader>
          <CardBody>
            <CardImg src={`public/icons/${element.id}.png`}/>
            <CardText>{`${element.description}`}</CardText>
          </CardBody>
        </Card>
      )
      return (
        <div>
          <h4 className='my-5 text-center'>Achievements</h4>
          <Row className='mb-5'>
            <Col>
              <CardDeck>
                {achievements}
              </CardDeck>
            </Col>
          </Row>
        </div>
        )
    } else {
      return (
        <Row className='my-5'>
          <Col>
            <p className='text-center'>To see your achievements please<Link to='/login'> login.</Link>
            </p>
          </Col>
        </Row>
      )
    }
  }
}

export default Trophy;