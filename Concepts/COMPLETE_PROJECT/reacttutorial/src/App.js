import logo from './logo.svg';
import './App.css';
import PropsClass from './components/props/propsClass';
import StateClass from './components/states/stateClass';
import Welcome from './components/props/propsFunc';
import Map from './components/mapping/maps';
import LifecycleLearning from './components/lifecycle/lifecycle';

function App() {
  return (
    <div className="App">
     <PropsClass name="Prashant"></PropsClass>{/* Sending value "Prashant" through props */}
     <Welcome name="Prashant"></Welcome>
     <StateClass></StateClass>
     <Map></Map>
     <LifecycleLearning></LifecycleLearning>
    </div>
  );
}

export default App;
