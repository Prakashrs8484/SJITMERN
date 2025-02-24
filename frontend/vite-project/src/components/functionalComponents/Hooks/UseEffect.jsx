import { useEffect ,useState} from "react";

const UseEffect=()=>{
    var[text,setText]=useState("Hello");

    useEffect(()=>{
        console.log(text);   
    }
    ,[text]
    )

    return(
        <section>
            <input 
            type="text" 
            value={text} 
            onChange={(e)=>{setText(e.target.value)}}/>

            <h1>{text}</h1>
        </section>
    )
}
export default UseEffect;