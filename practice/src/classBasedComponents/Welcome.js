import React from "react";

class Welcome extends React.Component{
    render(){
        return (
          this.props.op.map(({name,age},index)=>{
            return (
            <div key={index}>
            <h1 >{name} is of age {age}</h1>
            </div>)
          })
        )
        
        
        // <h1 className="header" id="header">{this.props.name} is of age {this.props.age}</h1>
    }
}
export default Welcome;