import React from "react";

class StateClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Prashant"
        }
        this.changer = this.changer.bind(this)
    }
    changer(){
        console.log("Changer hit")
        this.setState({
            name: "Nitin"
        })
    }
    render(){
        return(
            <>
            <h2>My Name is: {this.state.name}</h2>
            <button onClick={this.changer}>Change Name</button>
            </>
        )
    }
}

export default StateClass;