import React from 'react'
import {useState,useRef,useEffect} from 'react'
const UseRef = () => {

    var[text,setText] = useState("")
    var textRef = useRef();

    useEffect(() => {
        textRef.current=text
        console.log(textRef.current)
    }, [text])
    
  return (
    <div>
      <h1>This is useRef example.</h1>
      Type your Text:{" "}
      <input type="text" ref={textRef} onChange={(e) => setText(e.target.value)} />
      <h2>The current render text is {text}</h2>
      <h3>The previous render text is {textRef.current}</h3>
    </div>
  )
}


export default UseRef
