import Personaldetails from "./Personaldetails"
import Professionaldetails from "./Professionaldetails"
import { useState, createContext, useMemo } from "react";
import '../../App.css'
import User from "../../context/Usercontext";
import Changeme from "./Changeme";

function Profile() {
    const [user, setUser] = useState("Prashant Dey");
    const value = useMemo(
        () => ({ user, setUser }), 
        [user]
      );

    return (<div className="App">
        <User.Provider value={value}>
            <h4>You are viewing profile of {user}</h4>
            <h1>Personal Life</h1>
            <Personaldetails></Personaldetails>
            <br></br><br></br>
            <h1>Professional Life</h1>
            <Professionaldetails></Professionaldetails>
            <br></br><br></br>
            <Changeme></Changeme>
        </User.Provider>
    </div>)
}

export default Profile