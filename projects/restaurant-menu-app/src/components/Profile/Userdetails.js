import { useContext } from "react";
import User from "../../context/Usercontext";

function Userdetails(){
    const {user, setUser} = useContext(User)
    return(<>
        {user} has experience in Edtech industry along with product development company.
    </>)
}

export default Userdetails;