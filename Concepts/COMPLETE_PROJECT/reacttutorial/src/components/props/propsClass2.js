import React from 'react';

class PropsClass2 extends React.Component{
    constructor(props){
        super(props)
        this.name = this.props.name
    }
    render(){
        return(
            <>
            <h1>Props through Props- Class Based Component</h1>
            <h2>Name fetched from PropsClass: {this.name}</h2>

            
            </>
        )
    }

}
export default PropsClass2;