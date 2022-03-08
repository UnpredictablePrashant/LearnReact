import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <h1>ReactJS Clock</h1>
      <div id ="reactClock"><Clock></Clock></div>
    </div>
  );
}

export default App;
