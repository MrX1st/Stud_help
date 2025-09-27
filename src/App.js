import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Advices from './pages/Advices';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Info from './pages/Info';

function App() {
  return (
    <div> 
      WLCOME IN MY APP
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/advices" element={<Advices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
