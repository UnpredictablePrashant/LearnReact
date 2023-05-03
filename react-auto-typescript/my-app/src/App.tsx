import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Dragfunctionality from './components/Dragfunctionality';

const App: React.FC = () => {
  const [ name, setName ] = useState<string>("Prashant")
  const [ age, setAge ] = useState<number>(27)

  return(
    <>
    <div className='App'>
      Hello World <br></br>
      <Contact name={name} age={age} setName= {setName}></Contact>
      <button onClick={() => setName('Nitin')}>Change</button>
      <br></br>
      <Dragfunctionality></Dragfunctionality>
    </div>
    
    </>
  )
}


export default App;
