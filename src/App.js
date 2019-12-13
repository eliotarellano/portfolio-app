import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      
      <Footer />
    </Router>
  );
}

export default App;
