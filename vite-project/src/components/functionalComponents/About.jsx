import React from 'react'
import {useState} from 'react';
const About = () => {
  var initiaVal=0;
  var [num,setNum]=useState(initiaVal);

  const updateDecrement=()=>{
    setNum(num-1);
  };

  const updateIncrement=()=>{
    setNum(num+1);
  }



  return (
    <div>
       <h1>About Page</h1>
       <h2>State initial value is {initiaVal}</h2>
       <button onClick={updateDecrement}>--</button>
       <h3>Updating State: {num}</h3>
       <button onClick={updateIncrement}>++</button>
    </div>
  )
}

export default About;
