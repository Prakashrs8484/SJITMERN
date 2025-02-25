import React from "react";
import { useState, useMemo } from "react";

function slowfunction(num){

    return num*num;
}


const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme,setTheme]=useState(true);

  var styling={
    backgroundColor:theme?"black":"white",
    color:theme?"white":"black",
  };


  return (
    <>
    <button onClick={()=>setTheme(!theme)}>Toggle theme</button>
    <div style={styling}> 
      <h1>This is useMemo example</h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>The number is {number}</h2>
      <h2>The number is {slowfunction(number)}</h2>
    </div>
    </>
  );
};

export default UseMemo;