import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  // Ensure you have Tailwind CSS imported here or in index.css
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';  // Import the Footer component

// Placeholder components for routes
const HomePage = () => <div>Home Page Content</div>;
const AboutPage = () => <div>About Page Content</div>;
const ContactPage = () => <div>Contact Page Content</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <Navbar />

        
        <main className="flex-grow">
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes> */}
        </main>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
