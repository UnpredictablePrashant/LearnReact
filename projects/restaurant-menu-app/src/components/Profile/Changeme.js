import { useContext } from "react";
import User from "../../context/Usercontext";

function Changeme() {
    const {user, setUser} = useContext(User)
    const changeme = () => {
        setUser('Nitin')
    }

    return (<>
        <button onClick={changeme}>Changeme</button>
    </>)
}

export default Changeme;