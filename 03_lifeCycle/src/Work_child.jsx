import React, { Component } from 'react'

export default class Work_child extends Component {

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
  render() {
    return (
      <div>Work Child Componenet shown</div>
    )
  }
}
