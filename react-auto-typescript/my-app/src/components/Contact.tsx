import React, { useState } from "react";

interface Props {
    name: string,
    age: number
    setName: React.Dispatch<React.SetStateAction<string>>
}

const Contact = ({ name, age, setName }: Props) => {

    const [date, setDate] = useState<number>()
    const [phone, setPhone] = useState<string | number>(999999)
    let getTime = (): void => {
        let d = new Date().getTime();
        setDate(d)
        console.log(d)
      }
    const handleSubmit = () => {
        // e.preventDefault()
        console.log('name', name);
    }
    
    return (
        <>


            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={getTime}>Date</button>

            <div>
                Name: {name}
                <br></br>
                Age: {age}
                <br></br>
                Phone: {phone}
                <br></br>
                Time: {date}
            </div>

        </>
    )
}

export default Contact;