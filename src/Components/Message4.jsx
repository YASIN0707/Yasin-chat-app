import React from 'react'
class Message4 extends React.Component{
    state={
        msg:'Hello'
    }
     updateHandler=(value)=>{
     this.setState({msg:value})
    }
render(){
    return<div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateHandler.bind(this,'Good morning')} >GM</button>
        <button onClick={this.updateHandler.bind(this,'Good Afternoon')}>GA</button>
        <button onClick={this.updateHandler.bind(this,'Good Evening')}>GE</button>
        <button onClick={this.updateHandler.bind(this,'Good Night')}>GN</button>
     </div>
}
}
export default Message4