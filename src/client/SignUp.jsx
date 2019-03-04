import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ""
    }
  }

  
  // post(data) {
  //   return fetch('/api/signup', {
  //     method: 'post',
  //     body: JSON.stringify("billy"),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(checkStatus)
  //     .then(()=>console.log('updated!!!'))
  // }
  
  // checkStatus(response) {
  //   if (response.status >= 200 && response.status < 300) {
  //     return response
  //   } else {
  //     var error = new Error(response.statusText)
  //     error.response = response
  //     throw error
  //   }
  // } 
  handleSubmit(e) {
    this.setState ({ name: this.input.value});
    e.preventDefault();
    fetch('http://localhost:8080', {
      method: 'post',
      body: this.state.name,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      // .then(this.checkStatus)
      // .then(()=>console.log('updated!!!'))
  }
  
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

