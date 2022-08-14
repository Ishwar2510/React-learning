import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggle:true};
        this.handler=this.handler.bind(this);
    };

        
     handler(){
       this.setState({isToggle:false});
    }    
    

    render(){
        return(
            <button onClick={this.handler}>{this.state.isToggle?"On":"off"}</button>
        )
    }
}
export default Toggle;