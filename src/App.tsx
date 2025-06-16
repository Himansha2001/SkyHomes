import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import SellLand from './pages/SellLand';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/sell-land" element={<SellLand />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
