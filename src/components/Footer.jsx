import React from 'react';

function Footer() {
  return (
    <footer className="p-4 bg-lightDark text-center">
      <p className="text-gray-400">&copy; 2024 My Portfolio. All rights reserved.</p>
      <p className="text-gray-400">
        Built with <span className="text-neon-cyan">React</span> and <span className="text-neon-magenta">TailwindCSS</span>.
      </p>
    </footer>
  );
}

export default Footer;
