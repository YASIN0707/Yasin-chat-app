import { useState } from "react"
let Login=()=>{
    let[user,setUser]=useState({email:"",password:""})
    let emailHandler=(event)=>{
        setUser({...user,email:event.target.value})
    }
    let passwordHandler=(event)=>{
        setUser({...user,password:event.target.value})
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
        <input type='email' onChange={emailHandler} className="form-control"/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type='password' onChange={passwordHandler} className="form-control"/>
        </div>
        <input type="submit" value="login" className="btn btn-outline-success"/>
    </form>  
                </div>
            </div>
        </div>
    </div>
}
export default Login