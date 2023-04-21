import '../App.css'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

function Chatsocket() {
    const socket = io('http://127.0.0.1:4000');

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);

    const [chatVal, setChatVal] = useState('')
    const sendchat = (e) => {
        e.preventDefault();
        socket.timeout(5000).emit('chat', chatVal, () => {
          });
    }
   

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onFooEvent(value) {
            setFooEvents(previous => [...previous, value]);
        }
        

        socket.on('connect', onConnect);
        socket.on('chat', onFooEvent);
        console.log(fooEvents)

        return () => {
            socket.off('connect', onConnect);
            socket.off('chat', onFooEvent);
        };
        
    }, [fooEvents]);
    if (isConnected) {
        

        return (<div className="App">
            Connection state: True
            <br></br>
            <input value={chatVal} onChange={e => setChatVal(e.target.value)}></input><br></br>
            <button onClick={sendchat}>Send</button><br></br>
            {fooEvents}
        </div>)
    }else{
        return(<div className='App'>
            Sorry Connection couldn't be established
        </div>)
    }

}

export default Chatsocket