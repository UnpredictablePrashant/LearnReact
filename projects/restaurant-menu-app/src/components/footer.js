import React from 'react'

class Footer extends React.Component {
    constructor() {
        super();
        this.name = {
            rName: 'Red Chilli',
            rLoc: 'Delhi'
        }
    }
    render = () => {
        return (
            <h5 style={{color:'black', textAlign: 'center', color:'white'}}>Copyright 2022 - {this.name.rName} | {this.name.rLoc}</h5>            
        );
    }
}
export default Footer;