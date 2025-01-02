import CompC from './CompC'
let CompB=(props)=>{
return <div>
  <h1>Component B</h1>
  <pre>{JSON.stringify(props)}</pre>
  <h1>Name:{props.Employee.ename}</h1>
  <CompC Emp={props.Employee}/>
</div>
}
export default CompB