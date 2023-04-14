import Contact from './components/Contact';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu></Menu>}></Route>
          <Route index element={<Menu></Menu>}></Route>

          <Route path='contact' element={<Contact></Contact>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
