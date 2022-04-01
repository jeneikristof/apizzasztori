import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Food from './Food';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/etlap" element={<Food />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
