import React from "react";
import './Message.css'

let Message=()=>{
    let msgStyle={color:'pink'}
    return <div>
        <h1 style={{color:"red"}}>Good Morning</h1>
        <h1 style={{backgroundColor:'aqua'}}>Good Evening</h1>
        <h1 style={msgStyle}>Good Night</h1>
        <h1 className={'msgStyle2'}>Good Afternoon</h1>
    </div>
}
export default Message