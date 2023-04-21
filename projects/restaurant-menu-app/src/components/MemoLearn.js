import { useMemo, useState } from "react"
import "../App.css"
/* 
Memo does the caching of value
In this example below, we have a set of slowfunction which will take a lot of time to run.
setState basically renders the entire components, due to which even if we have certain part we don't want to calculate, will still take a lot of time to render.
*/
function MemoLearn() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFunction(number)
    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    }, [number])
    const styling = {
        backgroundColor: dark ? 'red' : 'yellow'
    }
    return (<div className="App">
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
        <button onClick={() => setDark(!dark)}>Double</button>
        <div style={styling}>{doubleNumber}</div>
    </div>)
}

function slowFunction(num) {
    console.log('Calling Slowfunction')
    for (let i = 0; i < 900000000; i++) { }
    console.log('loop completed')
    return num * 2
}

export default MemoLearn