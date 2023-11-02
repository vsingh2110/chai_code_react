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
      
      </div>
    );
  };
  
  export {Work2} 