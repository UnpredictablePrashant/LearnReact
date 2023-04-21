import { useState, useRef, useEffect } from "react";
import '../App.css'

function CountRef(){
    const [count, setCount] = useState(0)
    // const [renderCount, setRenderCount] = useState(0) 
    const refRenderCount = useRef(0)

    const counterIncre = () => {
        setCount(count+1)
    }
    const counterDecre = () => {
        setCount(count-1)
    }

    useEffect(()=>{
        // setRenderCount(renderCount+1) // this will cause infinite rendering
        refRenderCount.current = refRenderCount.current + 1
    })

    return(<div className="App">
        Value of count: {count}<br></br>
        <button onClick={counterIncre}>+</button> <br></br>
        <button onClick={counterDecre}>-</button> <br></br>
        {/* The component got rendered: {renderCount} */}
        The component got rendered: {refRenderCount.current }
    </div>)
}

export default CountRef;