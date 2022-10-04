import React from 'react';
import PropsClass2 from './propsClass2';


class PropsClass extends React.Component{
    constructor(props){
        super(props)
        this.name = this.props.name
    }
    render(){
        return(
            <>
            <h1>Learning Props - Class Based Component</h1>
            <h2>Name fetched from app.js is: {this.name}</h2>
            <h3>****************** Now calling PropsClass2 *****************</h3>
            <PropsClass2 name={this.name}></PropsClass2>


            
            </>
        )
    }

}
export default PropsClass;