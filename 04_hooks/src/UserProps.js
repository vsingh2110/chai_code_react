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
