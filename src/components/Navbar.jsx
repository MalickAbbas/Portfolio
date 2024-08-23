import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-lightDark">
      <h1 className="text-neon-cyan text-2xl">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-neon-magenta">Home</Link></li>
        <li><Link to="/projects" className="hover:text-neon-magenta">Projects</Link></li>
        <li><Link to="/about" className="hover:text-neon-magenta">About</Link></li>
        <li><Link to="/contact" className="hover:text-neon-magenta">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
