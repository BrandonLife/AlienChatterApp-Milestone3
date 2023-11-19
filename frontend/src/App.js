import './App.css';
import NavBar from './Components/NavigationBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './User/Login';
import Register from './User/Register';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
