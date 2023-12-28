// src/App.js
import React from 'react';
import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ProGallery from './components/ProGallery'; // Import here if it's used inside Portfolio
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import ShootingStars from './components/ShootingStars';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BrowserRouter>
        <Header />
        <Nav />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={
              <>
                <Portfolio />
                <ProGallery /> {/* This line will include ProGallery on Portfolio page */}
              </>
            } />
            {/* <Route path="/Contact" element={<Contact />} /> */}
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </main>
        <ShootingStars />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
