import { useState } from "react"

function Message1(){
let[msg,setMsg]=useState("Hello")
let gmHandler=()=>{
    setMsg('GoodMorning')
}
let gnHandler=()=>{
    setMsg('GoodNight')
}
return <div>
    <h2>Message Comp</h2>
    <h1>value:{msg}</h1>
    <button onClick={gmHandler}>GM</button>
    <button onClick={gnHandler}>GN</button>
    <button onClick={()=>{setMsg('Good Evening')}}>GE</button>
</div>
}
export default Message1