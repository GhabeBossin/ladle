// This entire file needs to be refactored in a big way
import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Jumbotron } from 'reactstrap'
import HardWords from './HardWords'
import BadUsers from './BadUsers'
import axios from 'axios';

class AdminDash extends Component {

  constructor() {
    super() 
    this.state = {
      users: this.props,
      chartData: {}
    }
  }

  // Upon mounting users and words data are gathered to be used in charts
  componentDidMount() {
      this.grabWordData(this.props.data)
      this.getUserData()
  }

  // Grab and sort all the users taking out the 10 with the lowest cards gotten wrong
  getUserData = () => {
    axios.get("http://localhost:8080/api/users/all")
    .then((response) => {
      console.log("resposne", response)
      let labels = []
      let wordType = []
      let data = []
      let sortedUsers = users.sort((a,b) => (a.wrong_counter > b.wrong_counter) ? 1 : ((b.wrong_counter > a.wrong_counter) ? -1 : 0));
      let minUsers = sortedUsers.slice(0, 10).reverse()
      minUsers.forEach(element => {
        labels.push(element.first_name.concat(' ', element.last_name))
        data.push(element.wrong_counter)
      })
      this.setState({ 
        chartDataUser: {
          labels: labels,
          datasets: [
            {
              label: 'Difficult Words',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 140, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 135, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 25, 214, 0.6)'
              ]
            }
          ],
          options: {
            scale: {
              ticks: {
                maxTicksLimit: 20
              }
            }
          }
        }
      })
    })
  }

  // sort data passed down from props. Lowest count taken out for most difficult
  grabWordData = (chartData) => {
    let labels = []
    let wordType = []
    let data = []
    let sortedChart = chartData.sort((a,b) => (a.diff_counter > b.diff_counter) ? 1 : ((b.diff_counter > a.diff_counter) ? -1 : 0));
    let minChart = sortedChart.slice(0, 10)
    minChart.forEach(element => {
      labels.push(element.en_word)
      wordType.push(element.name)
      data.push(element.diff_counter)
    })
    this.setState({ 
      chartData: {
        labels: labels,
        datasets: [
          {
            label: 'Difficult Words',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 140, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 135, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 25, 214, 0.6)'
            ]
          }
        ],
        options: {
          scale: {
            ticks: {
              maxTicksLimit: 20
            }
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="display-3">Dashboard</h1>
            <hr className="my-2" />
            <p className="lead">Monitor overall learning data and student status here.</p>
          </Jumbotron>
          <Row>
            <Col>
              <HardWords  chartData={ this.state.chartData } displayLegend={true}/>
            </Col>
            <Col>
              <BadUsers chartData={ this.state.chartDataUser } displayLegend={true}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default AdminDash
