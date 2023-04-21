import Contact from './components/Contact';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile/Profile';
import CountRef from './components/CountRef';
import MemoLearn from './components/MemoLearn';
import Chatsocket from './components/Chatsocket';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu></Menu>}></Route>
          <Route index element={<Menu></Menu>}></Route>

          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='ref' element={<CountRef></CountRef>}></Route>
          <Route path='memo' element={<MemoLearn></MemoLearn>}></Route>
          <Route path='chat' element={<Chatsocket></Chatsocket>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
