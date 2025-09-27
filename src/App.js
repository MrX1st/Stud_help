import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Advices from './pages/Advices';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Info from './pages/Info';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';


function App() {

  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div> 
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/advices" element={<Advices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
