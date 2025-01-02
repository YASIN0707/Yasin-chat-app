import  React from 'react'
import CompB from './CompB'
let CompA=(props)=>{
  let Emp={
    eid:101,
    ename:"Yasin",
    esal:45000
  }
 return <div>
 <h1>Component A</h1>
 <CompB Employee={Emp}/>
 </div>
}
export default CompA