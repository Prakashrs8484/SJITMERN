import React from 'react'
import { useState,useEffect,useMemo } from 'react'
function doubling(num){
    return num*2;
}
function slowFunction(num){
    console.log('Calling Slow Function');
    for(let i=0;i<=1000000000;i++){}
    return num*2;
}

const UseMemo = () => {

    var [number,setNumber] = useState(0);
    var [dark,setDark] = useState(false);
    var styling={
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
  return (
        <>
            <div style={styling}>
            <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
            <h1>This is useMemo example</h1>
            Number Box: <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h2>The number is {number}</h2>
            <h2>The number is {doubling(number)}</h2>
            <h2>The number is {slowFunction(number)}</h2>
            </div>
        </>
  )
}

export default UseMemo
