
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import  Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import './App.css'

function App() {
  

  return (

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
      </Router>
  );
};

export default App;
