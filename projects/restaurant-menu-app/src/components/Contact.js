import { useState } from "react";

function Contact() {
    const [inputField , setInputField] = useState({
        name: ''
    })
    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }
    const submitButton = () =>{
        alert(inputField.name)
    }
    return (<>

        <form>
            <label>
                Name:
                <input type="text" 
                name="name" 
                onChange={inputsHandler} 
                placeholder="Name"
                value={inputField.name}
                />
            </label>
            <input type="submit" value="Submit" onClick={submitButton}/>
        </form>
    </>)
}

export default Contact;