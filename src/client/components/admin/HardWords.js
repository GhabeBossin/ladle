import React, { Component } from 'react'
import { Card } from 'reactstrap'
import { Pie } from 'react-chartjs-2';

  class HardWords extends Component{
    constructor(props){
      super(props);
    }

    static defaultProps = {
      displayTitle: true,
      displayLegend: true,
      legendPosition: 'bottom',
    }

  render() {
    return (
      <Card body>
        <div className="chart">
          <Pie
            data={ this.props.chartData }
            options={{
              title:{
                display: this.props.displayTitle,
                text: 'These are the most difficult words',
                fontSize: 25
              },
              legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
      </Card>
    )
  }
}

export default HardWords
