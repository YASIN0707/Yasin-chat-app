import { useState } from "react"

let Sign=()=>{
    let[user,setUser]=useState({email:"",password:""})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(user)
    }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-5">
                <form action="" onSubmit={submitHandler}>
        <h1>{JSON.stringify(user)}</h1>
        <div className="form-group">
        <label>Email</label>
        <input type='email' onChange={updateHandler} className="form-control" name="email"/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type='password' onChange={updateHandler} className="form-control" name="password"/>
        </div>
        <input type="submit" value="login" className="btn btn-outline-success"/>
    </form>  
                </div>
            </div>
        </div>
    </div>
}
export default Sign