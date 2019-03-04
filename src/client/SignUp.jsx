import React from 'react';
import axios from 'axios';
const localhost = "http://localhost:8080"
axios({
  method: 'post',
  url: '5',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ""
    }
  }


  handleSubmit(e) {
    this.setState ({ name: this.input.value});
    e.preventDefault();
    axios({
      method: 'post',
      url: "http://localhost:8080",
      data: {
        name: "sklfjoefeif"
      }
    })
  }

    // fetch('http://localhost:8080', {
    //   method: 'post',
    //   body: JSON.stringify(this.state.name),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:8080'

    //   }
    // })
      // .then(this.checkStatus)
      // .then(()=>console.log('updated!!!'))


  // checkStatus(response) {
  //   if (response.status >= 200 && response.status < 300) {
  //     return response
  //   } else {
  //     var error = new Error(response.statusText)
  //     error.response = response
  //     throw error
  //   }
  // }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>{this.state.name} </h1>
      </div>
    );
  }
}

