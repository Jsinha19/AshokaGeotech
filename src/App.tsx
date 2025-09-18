import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// 1. Import the Footer component
import Footer from './components/Footer'; 
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    // You must wrap this App component in <BrowserRouter> in your main.tsx
    <div className="App">
        <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* 2. Add the Footer component here */}
      <Footer />
    </div>
  );
}

export default App;