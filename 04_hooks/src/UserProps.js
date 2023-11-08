import React, { useEffect } from 'react'

const UserProps = (props) => {
    useEffect(()=>{
        console.log("prop count 3 is called from use effect")
    },[props.count3])
    useEffect(()=>{
        console.log("prop count 4 is called from use effct")
    },[props.count4])
  return (
    <div>
      <h2>count3 is {props.count3}</h2>
      <h2>count4 is {props.count4}</h2>
    </div>
  )
}

export default UserProps


const UserProps1 = (props) => {

  useEffect(()=>{
    console.log(props)
  })
  return (
    
    <div>
      <span>{props.data.name }  </span>
      <span>{props.data.email }  </span>
      <span>{props.data.address.map((item)=>(
        <div>
       <span>{item.Hno },  </span> 
       <span>{item.city },  </span> 
       <span>{item.State },  </span> 
        
        
        </div>
        
      ))} </span>
      
    </div>
  )
}

export  {UserProps1}



const UserProps2 = (props) => {

  let data="ninja"

  return (

    <div>
    <p>User is : {data}</p>
    <button onClick={()=>{props.alert(data)}}>Click Send to Parent</button>
      
    </div>
  )
}

export {UserProps2} 
