import React, { useEffect, useState } from "react";
import UserProps from "./UserProps";

const User = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect Called");
  });

  return (
    <div>
      <div>Count is {count}</div>
      <h2>Testing of Use Effcet Hook</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default User;

const User1 = () => {
  let [count1, setCount1] = useState(10);
  let [count2, setCount2] = useState(100);

  let [count3, setCount3] = useState(50);
  let [count4, setCount4] = useState(500);

  useEffect(() => {
    console.log("Use Effect Called from count1");
  }, [count1]);

  useEffect(() => {
    console.log("Use Effect Called from count2");
  }, [count2]);
  return (
    <div>
      <div>Count is {count1}</div>
      <h2>Testing of Use Effcet Hook with conditions</h2>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Update Count1
      </button>
      <br />
      <div>Count is {count2}</div>
      <h2>Testing of Use Effcet Hook with conditions</h2>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Update Count2
      </button>
      <br />
      <br />
      <br />
      <h2>Testing of Use Effcet Hook with conditions</h2>
      <UserProps count3={count3} count4={count4} />

      <button
        onClick={() => {
          setCount3(count3 + 1);
        }}
      >
        Update Count3 prop
      </button>
      <br />

      <button
        onClick={() => {
          setCount4(count4 + 1);
        }}
      >
        Update Count4 prop
      </button>
    </div>
  );
};

export { User1 };

const User2 = () => {
  const users = [
    {
      name: "ninja",
      email: "ninja@gmail.com",
      address: [
        { Hno: "21", city: "new delhi", State: "Delhi" },
        { Hno: "100", city: "faridabad", State: "Haryana" },
        { Hno: "2100", city: "bangalore", State: "Karnataka" },
        { Hno: "100", city: "Hyderabad", State: "Telangana" },
      ],
    },
    {
      name: "niggaaa",
      email: "niggaaa@gmail.com",
      address: [
        { Hno: "21", city: "new delhi", State: "Delhi" },
        { Hno: "100", city: "faridabad", State: "Haryana" },
        { Hno: "2100", city: "bangalore", State: "Karnataka" },
        { Hno: "100", city: "Hyderabad", State: "Telangana" },
      ],
    },
    {
      name: "miyoko",
      email: "miyoko@gmail.com",
      address: [
        { Hno: "21", city: "new delhi", State: "Delhi" },
        { Hno: "100", city: "faridabad", State: "Haryana" },
        { Hno: "2100", city: "bangalore", State: "Karnataka" },
        { Hno: "100", city: "Hyderabad", State: "Telangana" },
      ],
    },
    {
      name: "hatori",
      email: "hatori@gmail.com",
      address: [
        { Hno: "21", city: "new delhi", State: "Delhi" },
        { Hno: "100", city: "faridabad", State: "Haryana" },
        { Hno: "2100", city: "bangalore", State: "Karnataka" },
        { Hno: "100", city: "Hyderabad", State: "Telangana" },
      ],
    },
  ];

  return (
    <div className="App flex items-center justify-items-center justify-center	mt-5">
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
          <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((items, i) => (
            <tr key={i}>
            <td>{i+1}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>
              <table className="table-auto border-separate border border-slate-500">
              <th>H.no</th>
              <th>City</th>
              <th>State</th>
                {items.address.map((data) => (
                  
                    
                     
                   
                    <tbody>
                      <tr>
                        <td>{data.Hno}</td>
                        <td>{data.city}</td>
                        <td>{data.State}</td>
                      </tr>
                    </tbody>
                 
                ))}
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { User2 };
