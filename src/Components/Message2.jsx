import { useState } from "react"
import React from "react";
let Message2=()=>{
    let[qty,setQty]=useState(1);
    return <React.Fragment>
     <h1>Value:{qty}</h1>
     <button onClick={()=>{setQty(qty-1)}}>-</button>
     <button onClick={()=>{setQty(qty+1)}}>+</button>
     </React.Fragment>
}
export default Message2