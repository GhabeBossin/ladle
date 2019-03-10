import React from 'react'

class Trophy extends React.Component {
  constructor() {
     super()
  }
  render() {
    console.log(this.props.data)
    if (this.props.data) {
    const achievements = this.props.data.map((element, i) =>
      <div key = {i}><img src={`public/icons/${element.id}.png`}/></div>
    )
    return (<div>{achievements}</div>) 
    } else { return <h1>You are not logged in.</h1> }
  }
}
export default Trophy;