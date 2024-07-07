import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Offer from './Pages/Offer/Offer';
import Category from './Pages/Category/Category';
import axios from 'axios';


axios.defaults.baseURL="http://localhost:4000";

function App() {
  return (
    <Router>
    <>
    <Navbar />
    <Routes>
      <Route path="/register" exact element={<Register />}/>
      <Route path="/login" exact element={<Login />}/>
      <Route path="/Home" exact element={<Home />}/>
      <Route path="/about" exact element={<About />}/>
      <Route path="/offer" exact element={<Offer />}/>
      <Route path="/cart" exact element={<Cart />}/>
      <Route path="/category" exact element={<Category />}/>
    </Routes>
    </>
    </Router>
  );
}

export default App;
