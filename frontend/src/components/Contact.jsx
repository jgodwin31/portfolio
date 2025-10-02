import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-4">You can reach me via email: <a href="mailto:your.email@example.com" className="text-blue-400">your.email@example.com</a></p>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
        <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
