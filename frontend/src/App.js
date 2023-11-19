import './App.css';
import NavBar from './Components/NavigationBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/blog' element={<Blog/> } />
      </Routes>
    </div>
  );
}

export default App;
