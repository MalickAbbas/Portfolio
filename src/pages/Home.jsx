import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <motion.h1
        className="text-5xl mb-4 text-neon-cyan"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-lg text-center"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Showcasing AI & IT Projects with a Cyberpunk Flair
      </motion.p>
    </section>
  );
}

export default Home;
