// import React from "react"

// class Timer extends React.Component{
//         constructor(props){
//             super(props);
//             this.state={date:new Date()};
//         }

//     componentDidMount(){
//         this.timerId=setInterval(()=>{this.tick()},1000)

//     }
//     componentWillUnmount(){
//         clearInterval(this.timerId);

//     }
//     tick(){
//         this.setState({date:new Date()});
//     }

//     render(){
//         return (
//             <>
//             <h1>{this.state.date.toLocaleTimeString()}</h1>
//             </>
//         )
//     }
// }
// export default Timer





import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date().toLocaleTimeString()}
    }

    componentDidMount(){
        this.timerId=setInterval(()=>{
            this.setState({date:new Date().toLocaleTimeString()})
        },1000)

    }

    componentWillUnmount(){
        clearInterval(this.timerId);

    }

    render(){
        return (
            <h1>{this.state.date}</h1>
        )
    }
}
export default Timer;