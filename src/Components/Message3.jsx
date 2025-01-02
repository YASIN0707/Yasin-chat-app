import React from 'react'
class Message3 extends React.Component{
    state={
        msg:'Hello'
    }
    gmHandler=()=>{
     this.setState({msg:'Good Morning'})
    }
    gaHandler=()=>{
        this.setState({msg:'Good Afternoon'})
       }
       geHandler=()=>{
        this.setState({msg:'Good Evening'})
       }
       gnHandler=()=>{
        this.setState({msg:'Good Night'})
       }
 render(){

    return <div>
        <h1>Value:{this.state.msg}</h1>
        <button onClick={this.gmHandler} >GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.geHandler}>GE</button>
        <button onClick={this.gnHandler}>GN</button>
    </div>
 }
}
export default Message3