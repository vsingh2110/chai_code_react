import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Work, { Work2 ,Work3, Work4, Work5, Work6, Work7 }  from './assets/work'
import './App.css'


import React, { Component } from 'react'

class App extends Component {
   constructor(){
    super();
    this.state={data:1,person:"maggi"}
   }

   countPlus(){
    this.setState({data:this.state.data+1})
   }

   countMinus(){
      this.setState({data:this.state.data-1})
   }

  render() {
    return (
      <>
            <h1>React Counter With Class Component</h1>
            <h2> Counter Value: {this.state.data}</h2>
            <button onClick={()=>this.setState({data:this.state.data+1})}> Increase Value </button>
            <button onClick={()=>this.countPlus()}> Increase Value </button>
            
            <br></br>
            <br></br>
            <button onClick={()=>this.setState({data:this.state.data-1})}> Decrease Value </button>
            <button onClick={()=>this.countMinus()}> Decrease Value </button>

            <br></br>
            <br></br>
            <Work/>
            <Work2/>

            <h2>Props in functional component</h2>
            <Work3 person={this.state.person} email={"ninja@gmail.com"} age={10}  />
            <Work3 person={"nigga"} email={"nigga@gmail.com"} age={20} />
            <Work3 person={"nonu"} email={"nonu@gmail.com"} age={10} />
            
            <h2>Props in class component</h2>
            <Work4 person={"ninja"} email={"ninja@gmail.com"} age={10} />
            <Work4 person={"nigga"} email={"nigga@gmail.com"} age={20} />
            <Work4 person={"nonu"} email={"nonu@gmail.com"} age={10} />
            <button onClick={()=>{this.setState({person:"niggggga"})}} >Change</button>
            

            <Work5/>

            <Work6/>
            <Work7/>
      </>
    )
  }
}


// function App() {
//   const [count, setCount] = useState(10)

//   return (
//     <>
//       <h1>React Counter</h1>
//       <h2> Counter Value: {count}</h2>
//       <button onClick={()=>{count>=20?false:setCount(count+1)}}> Increase Value </button>
//       <br></br>
//       <br></br>
//       <button onClick={()=>{count <= 0 ? false :setCount(count-1)}}> Decrease Value </button>
//     </>
//   )
// }

export {App} 
