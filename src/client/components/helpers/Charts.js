import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
// import Chart from 'chart.js';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.data
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={ this.props.chartData }
          options={{
            title:{
              display:this.props.displayTitle,
              text:'These are the most difficult words',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;