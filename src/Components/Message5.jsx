import { useState } from "react"

let Message5=()=>{
    let[msg,setMsg]=useState('hello')
   let updateHandler=(value)=>{
    console.log(value);
      setMsg(value)
    }
 return <div>
    <h1>Value:{msg}</h1>
    <button onClick={updateHandler.bind(null,'Good Morning')}>GM</button>
    <button onClick={updateHandler.bind(null,'Good Afternoon')}>GA</button>
    <button onClick={updateHandler.bind(null,'Good Evening')}>GE</button>
    <button onClick={updateHandler.bind(null,'Good Night')}>GN</button>
 </div>
}
export default Message5