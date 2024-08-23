import React from 'react';

function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-3xl mb-4 text-neon-cyan">Contact Me</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded bg-lightDark border border-neon-cyan focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded bg-lightDark border border-neon-cyan focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 rounded bg-lightDark border border-neon-cyan focus:outline-none"
          rows="5"
        />
        <button
          type="submit"
          className="p-2 rounded bg-neon-cyan text-dark hover:bg-neon-magenta transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
