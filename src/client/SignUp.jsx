import React from 'react';
import axios from 'axios';

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
    let data = this.input.value;
    e.preventDefault();
    axios.post("http://localhost:8080/signup", {
      name: data,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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

