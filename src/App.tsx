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
      {/* Navigation bar that appears on all pages */}
      <Navbar />
      {/* Main content area that contains the routed pages */}
      <div className="w-full">
        <Routes>
          {/* Home page - default route */}
          <Route path="/" element={<Home />} />
          {/* About page with mission and values */}
          <Route path="/about" element={<About />} />
          {/* Contact page (currently basic placeholder) */}
          <Route path="/contact" element={<Contact />} />
          {/* Resources page - browse and search community resources */}
          <Route path="/resources" element={<Resources />} />
          {/* Events page - browse community events */}
          <Route path="/events" element={<Events />} />
          {/* Add Resource page - form to submit new resources */}
          <Route path="/add-resource" element={<AddResource />} />
      </Routes>
      </div>
    </div>
  )
}

export default App