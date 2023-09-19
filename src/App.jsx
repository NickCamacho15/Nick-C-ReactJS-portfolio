import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
      <Route path="/" element={<AboutMe />} index />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="resume" element={<Resume />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
