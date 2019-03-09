import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  Row,
  Col } from 'reactstrap'

class Trophy extends Component {
  constructor() {
    super()
  }
  render() {
    if (this.props.data) {
      const achievements = this.props.data.map((element, i) =>
        <Col key = {i} sm='4'>
          <Card body>
            <CardImg src={`public/icons/${element.id}.png`}/>
          </Card>
        </Col>
      )
      return (
        <div>
          <h3 className='my-3 text-center'>Achievements:</h3>
          <Row>
            {achievements}
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