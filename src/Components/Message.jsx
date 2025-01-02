/* import React,{Fragment } from 'react'
class Message extends React.Component{
    msg="Hello"
    gmHandler=()=>{
        console.log("A");
        this.msg="Good Morning"
        this.forceUpdate()
    }
    gnHandler=()=>{
        console.log("B");
          this.msg="Good Night"
          this.forceUpdate()
    }
    render(){
        console.log("Render Method");
     return <Fragment>
        <h2>Message component</h2>
        <hr/>
        <h2>Write Message:{this.msg}</h2>
        <button className='btn btn-outline-primary' onClick={this.gmHandler}>GM</button>

        <button className="btn btn-outline-dark" onClick={this.gnHandler }>GN</button>
     </Fragment>
    }
}
export default Message */
import React ,{Fragment}from 'react'
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:'Good Morning'})
    }
    gnHandler=()=>{
        this.setState({msg:'Good night'})
    }
    gaHandler=()=>{
        this.setState({msg:'Good Afternoon'})
    }

    render(){
      return <Fragment>
        <h1>Wish Message:{this.state.msg}</h1>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.gnHandler}>GN</button>
       
      </Fragment>
    }
}
export default Message