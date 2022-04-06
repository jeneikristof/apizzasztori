
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Food from './Food';
import Drinks from './Drinks'
import Galery from './Galery';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/etlap" element={<Food />}></Route>
      <Route path="/itallap" element={<Drinks />}></Route>
      <Route path="/galeria" element={<Galery />}></Route>
      <Route path="/kapcsolat" element={<Contact />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
