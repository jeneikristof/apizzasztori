
import './App.css';
import NavBar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Food from './Food';
import Drinks from './Drinks'
import Galery from './Galery';
import Contact from './Contact';
import Footer from './Footer';
import News from './News';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/etlap" element={<Food />}></Route>
      <Route path="/itallap" element={<Drinks />}></Route>
      <Route path="/galeria" element={<Galery />}></Route>
      <Route path="/kapcsolat" element={<Contact />}></Route>
      <Route path="/cikkek" element={<News />}></Route>
    </Routes>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
