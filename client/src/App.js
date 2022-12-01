import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
// import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Contact from './pages/Contact';
import EmailList from './pages/EmailList';
import SinglePost from './pages/SinglePost';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column">
        <div style={{ backgroundColor: '#EEE' }} >
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/email-list" element={<EmailList />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
