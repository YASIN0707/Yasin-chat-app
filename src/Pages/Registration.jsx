import React, { Fragment, useState } from 'react'

const Registration = () => {
    let [user,setUser]=useState({name:"",mobile:"",dob:"",checked:false})
    let updateHandler= (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let checkBoxHandler = (event)=>{
        setUser({...user,checked:event.target.checked})
    }
  return <Fragment>
           <div className="container mt-3">
           <pre>{JSON.stringify(user)}</pre>
           <div className="row">
            <div className="col-md-4">
               <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4>Registration Page</h4>
                </div>
                <div className="card-body">
                    <form >
                        <div className='form-group'>
                         <input onChange={updateHandler} name="name" type="text" className='form-control' placeholder='User Name' />
                        </div>
                        <div className='form-group'>
                         <input onChange={updateHandler} name="mobile" type="text" className='form-control' placeholder='Mobile Number' />
                        </div>
                        <div className='form-group'>
                         <input onChange={updateHandler} name="dob" type="date" className='form-control' placeholder='DOB' />
                        </div>
                        
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" name="checked" onInput={checkBoxHandler} />
                            <label class="form-check-label" for="exampleCheck1">Please Accept T&C</label>
                        </div>
                        <input type="submit" value={"Registration"} className='btn btn-warning' />
                    </form>
                </div>
               </div>
            </div>
           </div>
           </div>
           

         </Fragment>
}

export default Registration