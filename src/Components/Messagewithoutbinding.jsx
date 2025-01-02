import React, { useState } from 'react'

let Messagewithoutbinding = () => {
  let[msg,setMsg]=useState('Hello')
   let Handler=(value)=>{
    setMsg(value)
   }
  return <div>
      <h1>{msg}</h1>
      <button onClick={Handler.bind(null,"Good Morning")}>GM</button>
  </div>
}
export default Messagewithoutbinding
