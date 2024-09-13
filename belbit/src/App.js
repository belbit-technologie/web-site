import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Testimonial from './components/Testimonials/Testimonials';
import Hero from './components/Hero/Hero';  
import './App.css';  
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';  


const HomePage = () => (
  <div>
    <Hero />
    <Testimonial />  
    <div>Home Page Content</div>
  </div>
);

const AboutPage = () => <div>About Page Content</div>;
const ContactPage = () => <div>Contact Page Content</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
