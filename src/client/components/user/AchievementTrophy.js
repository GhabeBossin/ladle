import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardText,
  CardGroup,
  Row,
  Col } from 'reactstrap'

class Trophy extends Component {
  constructor() {
    super()
  }

  render() {
    if (this.props.data) {
      const achievements = this.props.data.map((element, i) =>
        <StyledTrophy key={i} xs='6' sm='4' md='3' lg='2'>
          <CardHeader>{`${element.name}`}</CardHeader>
          <CardBody>
            <CardImg src={`public/icons/${element.id}.png`}/>
            <CardText>{`${element.description}`}</CardText>
          </CardBody>
        </StyledTrophy>
      )
      return (
        <div>
          <h4 className='my-5 text-center'>Achievements</h4>
          <Row className='mb-5'>
            <Col>
              <CardGroup>
                {achievements}
              </CardGroup>
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