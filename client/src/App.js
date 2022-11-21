import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className='d-flex flex-column'>
      <div>
        <Header />
      </div>
      <Home />
      <Footer />
    </div>
  );
};
