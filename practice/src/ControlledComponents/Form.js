import React from 'react';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    

    handleChange(event){
        this.setState({value:event.target.value});

    }
    handleSubmit(event){
        event.preventDefault();
        alert("form Submitted")

    }

    render(){
        return (
          <form onSubmit={this.handleSubmit}>
          <label >Name </label>
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} id='name'/> <br/>
           
            <button type="submit">submit</button>
            <textarea>

            </textarea>
          </form>
        )
    }
}
export default Form;