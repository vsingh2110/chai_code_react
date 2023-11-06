import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div>
        <div>Work Component</div>
        <button onClick={this.props.data}>Click From App Parent</button>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}



class Work1 extends Component {
    
    constructor(){

        super();
        console.log("hello from constructor1")
    }
  
    render() {
        console.log("hello from render1")
    return (
      <div>
      <br/>
      <br/>
      <br/>
      Work1 for constructor life cycle method- 1st constructor is called 
      <br/>even before render/html/pag load</div>
      
    )
  }
}

export {Work1}




class Work2 extends Component {

    constructor(){
        super();
        this.state={data:"ninja"}
    }
  render() {
    console.log("render called2", this.props.data2)
    return (
        
      <div><br/>
      <br/>
      <br/>Work2 from render life cycle method, called when 1-page loads, <br/>
      2 when state and props chnages
      <h2>Name is {this.props.data2} </h2>
      
      </div>
    )
  }
}

export {Work2}


class Work3 extends Component {

    constructor(){
        super();
        this.state={email:"ninja@gmail.com"}
    }
  render() {
    console.log("render called3", this.state.email)
    return (
      <div>

       <br/>
       <br/>
       <br/>
      <p>Work3 from render life cycle method, called when 1-page loads,
      <br/>
      2 when state and props chnages</p>
      <h2>Name is {this.state.email} </h2>
      
      <button onClick={()=>this.setState({email:"nigggaa@gmail.com"})} > click for set 
      state update of class componenet
       
        </button>
      
      
      </div>
    )
  }
}

export {Work3}


class Work4 extends Component {

    constructor(){
        super();
        this.state={data4:"ninja4"}
    }
    
    componentDidMount(){
        console.log("called from component did mount")
    }
  render() {
    console.log("render called4", this.state.data4 )
    return (
        
      <div><br/>
      <br/>
      <br/>Work4 from componenet did mount-- runs after constructor and render when <br/>
      all the html ,dom loads
      <h2>Name is {this.setState.data4} </h2>
      <button onClick={()=>this.setState({data4:"niggaaa4"})}> updating state to check componenet did mount </button>
      
      </div>
    )
  }
}

export {Work4}



class Work5 extends Component {

    constructor(){
        super();
        this.state={data5:0}
        console.log("constructor 5 called")
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("called from component did update")

        if(prevProps===prevState){
            console.warn("same value")}

            if( this.state.data5<=10){
                this.setState({data5:this.state.data5+1})
            }
    }


  render() {
    console.log("render called5", this.state.data5 )
    return (
        
      <div><br/>
      <br/>
      <br/>Work5 from componenet did update-- runs when props or states gets updated <br/>
      
      <h2>Count is {this.state.data5} </h2>
      <button onClick={()=>this.setState({data5:this.state.data5+1})}> updating state to check componenet did update </button>
      
      </div>
    )
  }
}

export {Work5}




class Work6 extends Component {

    constructor(){
        super();
        this.state={data6:0}
        console.log("constructor 6 called")
    }
    
    shouldComponentUpdate(){
        console.log("called from shouldComponentUpdate", this.state.data6)
       return true;
        
    }


  render() {
    console.log("render called6", this.state.data6 )
    return (
        
      <div><br/>
      <br/>
      <br/>Work6 from should componenet  update-- renders and update componenet on condition <br/>
      
      <h2>Count is {this.state.data6} </h2>
      <button onClick={()=>this.setState({data6:this.state.data6+1})}> updating state to check componenet did update </button>
       

     <br/> 
     <br/>
     <br/>
    
      </div>
    )
  }
}

export {Work6}


import Work_child from './work_child';

class Work7 extends Component {

    constructor(){
        super();
            this.state={
                show:true
            }
        
    }
  render() {
    return (
      <div>
      <h2>Component will unmount testing</h2> 
      {
        this.state.show?  <Work_child/> : <h3>Child Removed</h3>
      }
       <button onClick={()=>{this.setState({show:!this.state.show})}}>Mount and Unmount component</button>
      </div>
    )
  }
}

export {Work7}