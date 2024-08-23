import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot for customer service.',
      link: 'https://github.com/yourusername/aichatbot'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform.',
      link: 'https://github.com/yourusername/ecommerce'
    },
    // Add more projects here
  ];

  return (
    <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <div key={index} className="bg-lightDark p-4 rounded-lg shadow-lg hover:shadow-neon-purple transition-shadow duration-300">
          <h2 className="text-neon-magenta text-xl mb-2">{project.title}</h2>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
