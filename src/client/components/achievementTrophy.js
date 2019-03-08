import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  Col } from 'reactstrap'

class Trophy extends React.Component {
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
    return (<div>{achievements}</div>)
    } else { return <h1>You are not logged in.</h1> }
  }
}
export default Trophy;

// <Card body>
//   <h4>Struggling Students</h4>
//   <CardText>
//     These students are struggling the most to learn new words.
//   </CardText>