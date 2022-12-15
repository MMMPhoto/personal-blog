import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
// import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Contact from './pages/Contact';
import EmailList from './pages/EmailList';
import SinglePost from './pages/SinglePost';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Auth from './utils/auth';
import './App.css';

export default function App() {
	// Set logged in state
	const [auth, setAuth] = useState({ isLoggedIn: false, isLoading: true });

	// Check login status on load
	useEffect(() => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;
		token ? 
			setAuth({ isLoggedIn: true, isLoading: false }) : 
			setAuth({ isLoggedIn: false, isLoading: false });
	}, []);

  	return (
		<Router>
			{!auth.isLoading &&
				<div className="d-flex flex-column">
					<div style={{ backgroundColor: '#EEE' }} >
					<Header loggedIn={auth.isLoggedIn} />
					</div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/search" element={<Search />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/email-list" element={<EmailList />} />
						<Route path="/posts/:postId" element={<SinglePost />} />
						<Route path="/signup" element={<Signup setAuth={setAuth} />} />
						<Route path="/login" element={<Login setAuth={setAuth} />} />
						<Route path="/admin"
							element={ (auth.isLoggedIn) ? <Admin /> : <Navigate to='/' /> }
						/>
					</Routes>
					<Footer />
				</div>
			}
		</Router>
  	);
};
