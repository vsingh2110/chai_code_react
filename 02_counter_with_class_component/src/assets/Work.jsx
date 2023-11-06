import React, { useState } from "react";

const Work = () => {
  let [name, setName] = useState("Ninja");
  let [printName, setPrintName] = useState(false);
  return (
    <div>
      <h3> Print Input 'Functional Component' </h3>
      <h2>{name}</h2>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    
    </div>
  );
};

export default Work;


const Work2 = () => {
    let [name2, setName2] = useState("Ninja");
    let [printName2, setPrintName2] = useState(false);
    return (
      <div>
        <h3> Button Print Input 'Functional Component' </h3>
        {
            printName2?<h2>{name2}</h2>:null
        }
        <input
          type="text"
          onChange={(e) => {
            setName2(e.target.value); setPrintName2(false);
          }}
        />
        <button onClick={()=>setPrintName2(true)}>Button Print</button>
        <br/>
        <br/>
        <br/>
        <h2>Props in functional component</h2>
      </div>
    );
  };

  export {Work2} 

  
  const Work3 = ({person, email, age}) => {
    return (
      <div  style={{backgroundColor:"blue"}} >
       
        <p>Name is {person}</p>
        <p>Email is {email}</p>
        <p>Age is {age}</p>

        
      </div>
    )
  }
  
  export {Work3}
  
  import { Component } from 'react'
  
  class Work4 extends Component {

    render() {
      return (
        <div style={{backgroundColor:"red"}}>
        <h2>Props in class component</h2>
        <p>Name is {this.props.person}</p>
        <p>Email is {this.props.email}</p>
        <p>Age is {this.props.age}</p>
        
        
        </div>
      )
    }
  }

  export {Work4}
  
  
  const Work5 = () => {
     
    let [status, setStatus] = useState(true);
    let [status2, setStatus2] = useState(true);

    return (
      <div>    
      <h2>Show and Hide</h2>
      
        {
          status ? <h3>Show and Hide</h3> :null
        }
        <button onClick={()=>setStatus(true)} >Show</button>
        <button onClick={()=>setStatus(false)}>Hide</button>
       <br/>
       <h2>Show and Hide(toggle)</h2>
       {
        status2 ? <h3>Show and Hide(toggle)</h3> :null
      }
       
       <button onClick={()=>setStatus2(!status2)}>Toggle</button>

      </div>
       

    )
  }
  
  export {Work5}
  
  

const Work6 = () => {
  const [name, setName]= useState("");
  const [gender, setGender]= useState("");
  const [tnc,setTnc] = useState(true);
  return (
    <div>
      <br/>
      <br/>
      <h2>Handle Form Inputs In React</h2>
      <form  onSubmit={(e)=>{e.preventDefault(); console.log(name,gender,tnc)}}>
      <input type="text" placeholder="Type Your Name" onChange={(e)=>setName(e.target.value)}/> <br/>
      <select onChange={(e)=>setGender(e.target.value)}>
        <option> Select Options </option>
        <option> Male </option>
        <option> Female </option>
        <option> Others </option>
      </select>
      <br/>
      <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept T & C</span>
      <br/>
      <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export {Work6}




const Work7 = () => {
  let [user,setUser] = useState(4)

  return (
    <div>
    <h2>Conditional Rendering</h2>
      {
        user==1?<h3>Welcome User1</h3>
        :user==2?<h3>Welcome User2</h3>
        :user==3?<h3>Welcome User3</h3>
        :<h3>Welcome Guest</h3>
      }
    </div>
  )
}

export {Work7}
