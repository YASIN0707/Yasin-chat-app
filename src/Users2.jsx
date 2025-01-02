import React from "react";
import Axios from 'axios'
class Users1 extends React.Component{
    state={
        users:[]
    }
    componentDidMount=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respones)=>{
         this.setState({users:respones.data})
          
      })
       .catch(()=>{})
    }
            
    render(){
        return <div>
          <pre>{JSON.stringify(this.state.users)}</pre>
         
          {
            this.state.users.length>0?<div>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user)=>{
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>:<h2>No data</h2>
            
          }
        </div>
    }
}
export default Users1