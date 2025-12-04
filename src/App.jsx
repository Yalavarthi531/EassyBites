import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Chatbot />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
