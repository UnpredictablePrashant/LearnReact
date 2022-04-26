import React from 'react';
import './orderform.css'

class Orderform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cname: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = (event) =>{
        this.setState({ 
            cname: event.target.value,
         });
        console.log(this.state.cname)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name is '+this.state.cname)
        
    }

    render() {
        return (
            <div>
                <form className="client" onSubmit={this.handleSubmit} >
                    <label>Name</label>
                    <input type="text" value={this.state.cname} id="full-name" onChange={this.handleInputChange} placeholder="Full Name"></input>
                    <input type="submit" className="client-btn" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Orderform;