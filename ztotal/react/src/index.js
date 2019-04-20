import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
  componentDidMount() {
    console.log(88)
    console.log(Math.random())
  }
  render() {
    return (
      <div style={{color: 'red'}}>Hello World</div>
    )
  }
}

ReactDom.render(<App/ >, document.getElementById('root'));
