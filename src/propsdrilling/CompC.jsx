import CompD from './CompD'
let CompC =(props)=>{
  return <div>
<h1>Component C</h1>
<h1>EID:{JSON.stringify(props.Emp.eid)}</h1>
<CompD Employee_details={props.Emp}/>
  </div>
}
export default CompC