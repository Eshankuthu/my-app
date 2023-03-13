import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Button as="a" variant="primary">
    Button as link
  </Button>
      </nav>

      {/* 👇️ Wrap your Route components in a Routes component */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
