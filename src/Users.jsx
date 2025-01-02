import { useState } from "react"
import Axios from 'axios'
let Users=()=>{
    let[users,setUsers]=useState([])
    let getUsers=()=>{
     Axios.get('https://jsonplaceholder.typicode.com/users')
     .then((response)=>{
        console.log(response);
        console.log(response.data);
        setUsers(response.data)
     })
     .catch(()=>{})
    }
    return <div>
  <h3>User Components</h3>
  <button onClick={getUsers}>GetUsers</button>
  <pre>{JSON.stringify(users)}</pre>
   {
        users.length>0? <>
        <table border={2}>
           <thead>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
           </thead>
           <tbody>
               {
                   users.map((user)=>{
                      return <tr>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                       </tr>
                   })
               }
           </tbody>
        </table>
        </> :<>{"No data"}</>  
       
   }
     
 </div>
 
}
export default Users