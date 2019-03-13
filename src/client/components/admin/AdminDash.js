import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Jumbotron } from 'reactstrap'
import HardWords from './HardWords'
import BadUsers from './BadUsers'
// import Chart from 'chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Chart from '../helpers/Charts'



class AdminDash extends Component {

  constructor() {
    super() 
    this.state = {
      users: this.props,
      chartData: {}
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    // this.grabWordData(this.props.data)
    // this.setState({words: this.props.data})
    // if (this.props.data.length < 2) {
      // console.log(this.props.data, "this is props inside")
      this.grabWordData(this.props.data)
      console.log(this.props.data)
      //console.log("these are propsfeefefef", this.props.data)
    //  console.log(this.props.data.length, "this is props")

  }

  
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
    console.log("dataaaaa", this.state.chartData)

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
            <Chart chartData={ this.state.chartData } displayLegend={true}/>

            </Col>
            <Col>
            <BadUsers />
            </Col>
          </Row>
        </Container>
      </div>
    )
    }
}


export default AdminDash
