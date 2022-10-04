import logo from './logo.svg';
import './App.css';
import PropsClass from './components/propsClass';

function App() {
  return (
    <div className="App">
     <PropsClass name="Prashant"></PropsClass>{/* Sending value "Prashant" through props */}
    </div>
  );
}

export default App;
