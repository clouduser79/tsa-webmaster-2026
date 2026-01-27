import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Events from './pages/Events';
import AddResource from './components/AddResource';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/add-resource" element={<AddResource />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
