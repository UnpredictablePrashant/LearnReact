import { useContext } from "react";
import User from "../../context/Usercontext";
function Name(){
    const {user, setUser} = useContext(User);

    return(<>
        {user}
    </>)
}

export default Name;