import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import Reducercounter from './features/newcounter/Reducercounter';

function App() {
  return (
    <div className="App">
      {/* Topics to learn:
      1. Actions
      2. Reducer
      3. Store
      4. Functions associated with store - createStore(), dispatch(action), getState()
       */}

       <Counter></Counter>
       <br></br>
       <br></br>
       <Reducercounter></Reducercounter>

      <br></br>
      
    </div>
  );
}

export default App;
