import React from 'react'
class Quatity extends React.Component{
   state={
    qty:1
   } 
   incrHandler=()=>{
      this.setState({qty:this.state.qty+1})
   }
   decrHandler=()=>{
    this.setState({qty:this.state.qty-1})
   }
render(){
    console.log('AUG1');
        return <div>
            <button onClick={this.decrHandler}>-</button>
            {this.state.qty}
            <button onClick={this.incrHandler}>+</button>
        </div>
    }
}
export default Quatity