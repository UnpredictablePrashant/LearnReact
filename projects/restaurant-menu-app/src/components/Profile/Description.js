import { useContext } from "react";
import User from "../../context/Usercontext";

function Description(){
    const {user, setUser} = useContext(User)
    return(<>
        {user} is hard working and honest person.    
    </>)
}

export default Description;